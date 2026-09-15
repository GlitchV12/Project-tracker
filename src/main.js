import './styles/main.css';
import { TIMELINE_DATA, MODULES_DATA, ROLES } from './data/mockData.js';
window.TIMELINE_DATA = TIMELINE_DATA;
window.MODULES_DATA = MODULES_DATA;
window.ROLES = ROLES;



/* =============================================
   FLOATING NOTIFICATION
   ============================================= */

function dismissFloat() {
  document.getElementById('floatNotif').classList.add('hidden');
}
// Auto-dismiss after 12s
setTimeout(dismissFloat, 12000);








/* =============================================
   NAV
   ============================================= */

const TITLES = {
  dashboard: 'Dashboard',
  projects: 'All Projects',
  overview: 'QM101 - Overview',
  work: 'QM101 - Work Items',
  timeline: 'QM101 - Timeline',
  review: 'QM101 - Review',
  activity: 'QM101 - Activity',
  notifications: 'Notifications',
};

let curScreen = 'dashboard';

function nav(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-item,.nav-sub').forEach(n => n.classList.remove('active'));
  const target = document.getElementById('screen-' + id);
  if (target) target.classList.add('active');
  document.getElementById('topbar-title').textContent = TITLES[id] || id;
  curScreen = id;
  const el = document.getElementById('nav-' + id);
  if (el) el.classList.add('active');

  if (id === 'work') {
    // If no module is currently open or selected, default to opening only Module 1 cleanly
    const anyOpen = document.querySelector('.tree-children.open');
    if (!anyOpen) {
      openModuleWork('m1');
    }
  }
  if (id === 'review') {
    renderReviewVersions();
  }
}

function navProj(tab, modId) {
  if (tab === 'work' && modId) {
    openModuleWork(modId);
  } else {
    nav(tab);
  }
}


/* =============================================
   ROLE SWITCHER
   ============================================= */


let curRole = 'Manager';

function toggleRoleMenu() {
  document.getElementById('roleDropdown').classList.toggle('open');
}

function switchRole(role) {
  const r = ROLES[role];
  curRole = role;
  const isManager = role === 'Manager';
  const isPRA = role === 'PRA';
  const isEditor = role === 'Editor';

  // Identity

  // Update notes avatars in visible lesson detail
  document.querySelectorAll('[id^="notes-av-"]').forEach(el => {
    el.textContent = r.initials;
    el.style.background = r.color;
  });
  document.getElementById('sb-av').textContent = r.initials;
  document.getElementById('sb-av').style.background = r.color;
  document.getElementById('sb-name').textContent = r.name;
  document.getElementById('sb-role').textContent = role;
  document.getElementById('rc-label').textContent = role;
  document.getElementById('rc-dot').style.background = r.color;
  document.getElementById('dash-greet').textContent = r.greet;
  document.getElementById('modal-av').textContent = r.initials;
  document.getElementById('modal-av').style.background = r.color;
  document.getElementById('modal-mgr-name').textContent = r.name;

  // Manager-only elements (New Project buttons etc)
  document.querySelectorAll('.manager-only').forEach(el => {
    el.style.display = isManager ? '' : 'none';
  });

  // Dashboard views
  document.getElementById('dash-manager-view').style.display = isManager ? '' : 'none';
  document.getElementById('dash-pra-view').style.display = isPRA ? '' : 'none';
  document.getElementById('dash-editor-view').style.display = isEditor ? '' : 'none';
  document.getElementById('dash-section-label').textContent = isManager ? 'Needs your attention' : 'Your tasks';
  document.getElementById('dash-proj-label').textContent = isManager ? 'Your Projects' : 'Your Assignments';

  // Review screen: decision vs submission
  const decPanel = document.getElementById('rev-decision-panel');
  const subPanel = document.getElementById('rev-submit-panel');
  const praActions = document.getElementById('rev-pra-actions');
  if (decPanel) { decPanel.style.display = isManager ? '' : 'none'; }
  if (subPanel) { subPanel.style.display = isManager ? 'none' : ''; }
  if (praActions) { praActions.style.display = isManager ? 'none' : ''; }

  // Topbar + button: hide new project for non-managers
  const tbNew = document.querySelector('.topbar .tb-icon[onclick="openModal()"]');
  if (tbNew) tbNew.style.display = isManager ? '' : 'none';

  // Update check marks
  document.querySelectorAll('.role-opt').forEach(o => {
    o.classList.remove('active');
    const chk = o.querySelector('svg[id^="check"]');
    if (chk) chk.remove();
  });
  const activeOpt = document.getElementById('role-' + role);
  if (activeOpt) {
    activeOpt.classList.add('active');
    const chk = document.createElement('svg');
    chk.id = 'check-' + role;
    chk.setAttribute('width', '14'); chk.setAttribute('height', '14');
    chk.setAttribute('viewBox', '0 0 16 16');
    chk.setAttribute('fill', 'none'); chk.setAttribute('stroke', r.color);
    chk.setAttribute('stroke-width', '2.5');
    chk.style.marginLeft = 'auto';
    chk.innerHTML = '<path d="M3 8l4 4 6-6"/>';
    activeOpt.appendChild(chk);
  }
  document.getElementById('roleDropdown').classList.remove('open');
}

document.addEventListener('click', e => {
  if (!e.target.closest('#roleChipBtn') && !e.target.closest('.user-row') && !e.target.closest('#roleDropdown')) {
    document.getElementById('roleDropdown').classList.remove('open');
  }
});








/* =============================================
   TIMELINE (GOOGLE CALENDAR STYLE + COLLAPSIBLE MODULES)
   ============================================= */



function dateToDayIndex(dateStr) {
  if (!dateStr) return 0;
  const startBase = new Date('2026-09-01T00:00:00');
  const d = new Date(dateStr + 'T00:00:00');
  const diff = Math.round((d - startBase) / (1000 * 60 * 60 * 24));
  return Math.max(0, Math.min(55, diff));
}

function refreshTimelineItemStatus(item) {
  if (item.status === 'Complete') item.status = 'Completed';
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const startDate = new Date(item.sStr + 'T00:00:00');
  const endDate = new Date(item.eStr + 'T00:00:00');

  if (item.status !== 'Completed') {
    if (!Number.isNaN(endDate.getTime()) && endDate < today) {
      item.status = 'Not updated yet';
      item.overdue = true;
      item.future = false;
    } else if (!Number.isNaN(startDate.getTime()) && startDate > today) {
      item.status = 'Yet to start';
      item.future = true;
      item.overdue = false;
    } else {
      item.status = 'In Progress';
      item.overdue = false;
      item.future = false;
    }
  } else {
    item.overdue = false;
    item.future = false;
  }
  return item.status;
}

function timelineStatusClass(status) {
  if (status === 'Completed') return 'p-complete';
  if (status === 'Not updated yet') return 'p-danger';
  if (status === 'Yet to start') return 'p-success';
  return 'p-editing';
}

let timelineViewMode = 'month';
let timelineStartDate = new Date('2026-09-01T00:00:00');
let timelineTotalDays = 30;

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

function updateTimelineState() {
  if (timelineViewMode === 'month') {
    timelineStartDate.setDate(1);
    timelineTotalDays = getDaysInMonth(timelineStartDate.getFullYear(), timelineStartDate.getMonth());
  } else {
    timelineTotalDays = 7;
  }

  const sel = document.getElementById('tl-month-sel');
  if (sel) {
    const y = timelineStartDate.getFullYear();
    const m = String(timelineStartDate.getMonth() + 1).padStart(2, '0');
    const val = `${y}-${m}-01`;
    if (sel.querySelector(`option[value="${val}"]`)) {
      sel.value = val;
    }
  }

  const btnW = document.getElementById('tl-view-week');
  const btnM = document.getElementById('tl-view-month');
  if (btnW && btnM) {
    if (timelineViewMode === 'week') {
      btnW.style.background = 'var(--surface-2)';
      btnM.style.background = 'transparent';
    } else {
      btnM.style.background = 'var(--surface-2)';
      btnW.style.background = 'transparent';
    }
  }
}

function setTimelineView(mode) {
  timelineViewMode = mode;
  updateTimelineState();
  buildGantt();
}

function onTimelineMonthChange() {
  const sel = document.getElementById('tl-month-sel');
  if (sel && sel.value) {
    timelineStartDate = new Date(sel.value + 'T00:00:00');
    updateTimelineState();
    buildGantt();
  }
}

function timelineNav(dir) {
  if (timelineViewMode === 'month') {
    timelineStartDate.setMonth(timelineStartDate.getMonth() + dir);
  } else {
    timelineStartDate.setDate(timelineStartDate.getDate() + (dir * 7));
  }
  updateTimelineState();
  buildGantt();
}

function buildGantt() {
  const totalDays = timelineTotalDays;
  const todayRaw = (new Date() - timelineStartDate) / (1000 * 60 * 60 * 24);
  const today = Math.max(-1000, Math.min(totalDays + 1000, todayRaw));

  const LeftPos = dateStr => {
    const d = new Date(dateStr + 'T00:00:00');
    const diff = (d - timelineStartDate) / (1000 * 60 * 60 * 24);
    return ((diff / totalDays) * 100).toFixed(2) + '%';
  };

  const W = (sStr, eStr) => {
    const sd = new Date(sStr + 'T00:00:00');
    const ed = new Date(eStr + 'T00:00:00');
    const startDiff = (sd - timelineStartDate) / (1000 * 60 * 60 * 24);
    const endDiff = (ed - timelineStartDate) / (1000 * 60 * 60 * 24);
    let width = endDiff - startDiff;
    if (width < 0) width = 0;
    return ((width / totalDays) * 100).toFixed(2) + '%';
  };

  const hdrEl = document.getElementById('gantt-hdr-weeks');
  let hdrHtml = '';
  let gridCellsHtml = '';

  if (timelineViewMode === 'month') {
    for (let i = 0; i < 4; i++) {
      let d = new Date(timelineStartDate);
      d.setDate(d.getDate() + Math.floor((timelineTotalDays / 4) * i));
      const m = d.toLocaleString('default', { month: 'short' });
      hdrHtml += `<div class="gantt-wk">${m} ${d.getDate()}</div>`;
      gridCellsHtml += `<div class="gantt-cell"></div>`;
    }
  } else {
    for (let i = 0; i < 7; i++) {
      let d = new Date(timelineStartDate);
      d.setDate(d.getDate() + i);
      const m = d.toLocaleString('default', { month: 'short' });
      const dayStr = d.toLocaleString('default', { weekday: 'short' });
      hdrHtml += `<div class="gantt-wk" style="font-size:10.5px">${dayStr} ${d.getDate()}</div>`;
      gridCellsHtml += `<div class="gantt-cell"></div>`;
    }
  }
  if (hdrEl) hdrEl.innerHTML = hdrHtml;

  let labelsHtml = '';
  let barsHtml = '';

  Object.keys(TIMELINE_DATA).forEach(modId => {
    const mod = TIMELINE_DATA[modId];

    let modStartStr = '2099-12-31';
    let modEndStr = '2000-01-01';
    if (mod.items.length > 0) {
      mod.items.forEach(it => {
        if (it.sStr < modStartStr) modStartStr = it.sStr;
        if (it.eStr > modEndStr) modEndStr = it.eStr;
      });
    } else {
      const dStr = timelineStartDate.toISOString().split('T')[0];
      modStartStr = dStr;
      modEndStr = dStr;
    }

    labelsHtml += `
              <div class="gantt-fixed-row row-mod" onclick="toggleTimelineMod('${modId}')" style="display:flex;align-items:center;justify-content:space-between;min-height:34px;gap:4px;padding:6px 10px 6px 10px">
                <div style="display:flex;align-items:center;gap:6px;min-width:0;overflow:hidden">
                  <span class="gantt-mod-toggle" style="flex-shrink:0">${mod.open ? '▼' : '▶'}</span>
                  <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:12.5px;font-weight:700">${mod.name}</span>
                </div>
                <div style="display:flex;align-items:center;gap:4px;flex-shrink:0">
                  <span class="pill ${mod.statusPill}" style="font-size:9px;padding:1px 5px">${mod.progress}%</span>
                  <span class="pill" style="font-size:9px;background:var(--surface-2);color:var(--text-3);padding:1px 4px;cursor:pointer" onclick="event.stopPropagation();openModuleTimelineDetail('${modId}')">${mod.items.length} ℹ</span>
                </div>
              </div>
            `;

    barsHtml += `
              <div class="gantt-row gantt-mod-row" onclick="toggleTimelineMod('${modId}')" style="min-height:34px">
                <div class="gantt-cells" style="height:34px; overflow:hidden;">
                  ${gridCellsHtml}
                  <div class="gantt-mod-span-bar" style="left:${LeftPos(modStartStr)};width:${W(modStartStr, modEndStr)}"></div>
                </div>
              </div>
            `;

    if (mod.open) {
      if (mod.items.length === 0) {
        labelsHtml += `<div class="gantt-fixed-row row-wi" style="min-height:34px;font-style:italic;color:var(--text-3);padding-left:28px">No schedule items yet</div>`;
        barsHtml += `
                  <div class="gantt-row" style="min-height:34px">
                    <div class="gantt-cells" style="height:34px">
                      ${gridCellsHtml}
                      <button class="btn btn-ghost btn-xs" style="position:absolute;left:10px" onclick="openAddTimelineModal('${modId}')">+ Add Schedule</button>
                    </div>
                  </div>
                `;
      } else {
        mod.items.forEach(item => {
          const eventStatus = refreshTimelineItemStatus(item);
          labelsHtml += `
                    <div class="gantt-fixed-row row-wi" onclick="openTimelineItemInfo('${item.id}')" style="min-height:34px;padding:5px 10px 5px 28px;cursor:pointer">
                      <span style="font-weight:600;color:var(--text);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${item.overdue ? '⚠ ' : ''}${item.lesson}</span>
                      <span style="margin-left:4px;color:var(--text-3)">- ${item.task}</span>
                      <span class="pill ${timelineStatusClass(eventStatus)}" style="font-size:9px;padding:1px 5px;margin-left:5px;flex-shrink:0">${eventStatus}</span>
                    </div>
                  `;
          barsHtml += `
                    <div class="gantt-row" style="min-height:34px">
                      <div class="gantt-cells" style="height:34px; overflow:hidden;">
                        ${gridCellsHtml}
                        <div class="gantt-bar" style="left:${LeftPos(item.sStr)};width:${W(item.sStr, item.eStr)};background:${item.col}" onclick="openTimelineItemInfo('${item.id}')">
                          <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${item.txt}</span>
                          <span class="gantt-bar-edit-btn" onclick="event.stopPropagation();openEditTimelineModal('${item.id}')" title="Edit schedule dates"><svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M11 2l3 3-8 8H3v-3l8-8z"/></svg></span>
                        </div>
                      </div>
                    </div>
                  `;
        });
      }
    }
  });

  const labelsEl = document.getElementById('gantt-fixed-labels');
  const body = document.getElementById('gantt-body');
  if (!labelsEl || !body) return;

  labelsEl.innerHTML = labelsHtml;
  body.innerHTML = barsHtml;
  body.style.position = 'relative';

  // Today line in the scrollable area
  const todayPct = (today / totalDays * 100).toFixed(2);
  const line = document.createElement('div');
  line.className = 'today-line';
  line.style.left = `${todayPct}%`;
  const lbl = document.createElement('div');
  lbl.className = 'today-lbl';
  lbl.textContent = 'Today';
  line.appendChild(lbl);
  body.appendChild(line);

  // Sync scroll position for label rows and bar rows (keep heights in sync)
  syncGanttRowHeights();
}

function syncGanttRowHeights() {
  // Ensure fixed label rows and scrollable bar rows have matching heights
  const labelRows = document.querySelectorAll('#gantt-fixed-labels .gantt-fixed-row');
  const barRows = document.querySelectorAll('#gantt-body .gantt-row');
  const len = Math.min(labelRows.length, barRows.length);
  for (let i = 0; i < len; i++) {
    const h = Math.max(labelRows[i].offsetHeight, barRows[i].offsetHeight, 34);
    labelRows[i].style.minHeight = h + 'px';
    barRows[i].style.minHeight = h + 'px';
  }
}

function toggleTimelineMod(modId) {
  if (TIMELINE_DATA[modId]) {
    TIMELINE_DATA[modId].open = !TIMELINE_DATA[modId].open;
    buildGantt();
  }
}

function collapseAllTimeline() {
  Object.values(TIMELINE_DATA).forEach(m => m.open = false);
  buildGantt();
  showToast('Collapsed all timeline modules');
}

function expandAllTimeline() {
  Object.values(TIMELINE_DATA).forEach(m => m.open = true);
  buildGantt();
  showToast('Expanded all timeline modules');
}

/* Add Schedule Event (Google Calendar Style) */
/* Helper functions for Add Schedule Modal & Atomic Progress */
function populateAddTimelineLessonOptions(modId) {
  const sel = document.getElementById('add-tl-lesson-select');
  if (!sel) return;
  if (modId === '__NEW_MOD__') {
    sel.innerHTML = `<option value="__NEW__">+ Create / Type Custom Lesson Title</option>`;
    return;
  }

  const titles = new Set();
  if (TIMELINE_DATA[modId] && TIMELINE_DATA[modId].items) {
    TIMELINE_DATA[modId].items.forEach(it => {
      if (it.lesson) titles.add(it.lesson);
    });
  }
  if (MODULES_DATA[modId] && MODULES_DATA[modId].lessons) {
    MODULES_DATA[modId].lessons.forEach(l => {
      if (l.title) titles.add(l.title);
    });
  }

  let html = `<option value="">-- Select an existing Task/Lesson Title --</option>`;
  titles.forEach(t => {
    html += `<option value="${escapeHtml(t)}">${escapeHtml(t)}</option>`;
  });
  html += `<option value="__NEW__">+ Create / Type Custom Lesson Title</option>`;
  sel.innerHTML = html;
}

function onAddTimelineModChange() {
  const modSel = document.getElementById('add-tl-mod');
  const modId = modSel ? modSel.value : 'm3';
  const newModRow = document.getElementById('add-tl-new-mod-row');
  const newModInput = document.getElementById('add-tl-new-mod-name');

  if (modId === '__NEW_MOD__') {
    // Show new module name field
    if (newModRow) newModRow.style.display = 'block';
    // Compute next module number
    const existingCount = Object.keys(MODULES_DATA).length;
    if (newModInput) newModInput.placeholder = `Module ${existingCount + 1}`;
    if (newModInput && !newModInput.value) newModInput.value = `Module ${existingCount + 1}`;
    if (newModInput) setTimeout(() => newModInput.focus(), 60);
  } else {
    if (newModRow) newModRow.style.display = 'none';
  }

  populateAddTimelineLessonOptions(modId);
  onAddTimelineLessonSelectChange();
  updateAddTimelineLessonPreview();
}

function onAddTimelineLessonSelectChange() {
  const sel = document.getElementById('add-tl-lesson-select');
  const titleInput = document.getElementById('add-tl-title');
  const newLessonRow = document.getElementById('add-tl-new-lesson-row');
  const newLessonInput = document.getElementById('add-tl-new-lesson-name');
  if (!sel || !titleInput) return;

  if (sel.value && sel.value !== '__NEW__') {
    // Existing lesson selected: fill title, hide new input
    titleInput.value = sel.value;
    if (newLessonRow) newLessonRow.style.display = 'none';
  } else if (sel.value === '__NEW__') {
    // Show new lesson name input
    if (newLessonRow) { newLessonRow.style.display = 'block'; }
    if (newLessonInput) { newLessonInput.value = ''; setTimeout(() => newLessonInput.focus(), 60); }
    titleInput.value = '';
  } else {
    if (newLessonRow) newLessonRow.style.display = 'none';
  }
  updateAddTimelineLessonPreview();
}

function syncNewLessonToTitle() {
  const newLessonInput = document.getElementById('add-tl-new-lesson-name');
  const titleInput = document.getElementById('add-tl-title');
  if (newLessonInput && titleInput) {
    titleInput.value = newLessonInput.value;
  }
  updateAddTimelineLessonPreview();
}

function validateTlStartDate() {
  const startInput = document.getElementById('add-tl-start');
  const errDiv = document.getElementById('add-tl-start-err');
  if (!startInput || !errDiv) return;
  // Project start date: Sep 1 2026
  const projectStart = new Date('2026-09-01T00:00:00');
  const chosen = new Date(startInput.value + 'T00:00:00');
  if (startInput.value && chosen < projectStart) {
    errDiv.style.display = 'block';
    errDiv.textContent = 'Start date cannot be earlier than the project start date (Sep 1, 2026).';
    startInput.style.borderColor = 'var(--danger)';
  } else {
    errDiv.style.display = 'none';
    startInput.style.borderColor = '';
  }
}

function updateAddTimelineLessonPreview() {
  const modSel = document.getElementById('add-tl-mod');
  const modId = modSel ? (modSel.value === '__NEW_MOD__' ? '__new__' : modSel.value) : 'm3';
  const title = document.getElementById('add-tl-title') ? document.getElementById('add-tl-title').value.trim() : '';
  const prevBox = document.getElementById('add-tl-atomic-preview');
  if (!prevBox) return;

  if (!title) {
    prevBox.style.display = 'none';
    return;
  }

  const existingEvents = modId === '__new__' ? [] : (TIMELINE_DATA[modId]?.items || []).filter(i => i.lesson.toLowerCase() === title.toLowerCase());

  if (existingEvents.length > 0) {
    prevBox.style.display = 'block';
    prevBox.innerHTML = `
              <div style="font-size:11.5px;color:var(--primary);background:var(--primary-subtle);border:1px solid var(--primary-border);border-radius:6px;padding:8px 11px;margin-top:7px">
                <div style="font-weight:700;margin-bottom:4px">Atomic Progress Tracking: ${existingEvents.length} event${existingEvents.length > 1 ? 's' : ''} already scheduled for "${escapeHtml(title)}":</div>
                <div style="display:flex;flex-wrap:wrap;gap:5px;margin-top:4px">
                  ${existingEvents.map(e => `<span class="pill" style="font-size:10px;background:${e.col}20;color:${e.col};border:1px solid ${e.col}40"><b>${e.task}</b> (${e.sStr.slice(5)} to ${e.eStr.slice(5)})</span>`).join('')}
                </div>
                <div style="font-size:10.5px;color:var(--text-3);margin-top:4px">Adding this event creates another atomic phase row for granular progress tracking.</div>
              </div>
              `;
  } else {
    prevBox.style.display = 'block';
    prevBox.innerHTML = `
              <div style="font-size:11.5px;color:var(--text-2);background:var(--surface-2);border:1px solid var(--border);border-radius:6px;padding:7px 10px;margin-top:7px">
                <b>New Task/Lesson:</b> Starting initial atomic phase for <b>"${escapeHtml(title)}"</b>.
              </div>
              `;
  }
}

/* Add Schedule Event (Google Calendar Style) */
function openAddTimelineModal(presetModId) {
  const modId = presetModId || (document.getElementById('add-tl-mod') ? document.getElementById('add-tl-mod').value : 'm3');
  if (document.getElementById('add-tl-mod')) {
    document.getElementById('add-tl-mod').value = modId;
  }
  populateAddTimelineLessonOptions(modId);
  updateAddTimelineLessonPreview();
  document.getElementById('modal-add-timeline').classList.add('open');
  setTimeout(() => {
    const el = document.getElementById('add-tl-title');
    if (el) el.focus();
  }, 80);
}

function closeAddTimelineModal() {
  document.getElementById('modal-add-timeline').classList.remove('open');
}

function closeAddTimelineModalOut(e) {
  if (e.target === document.getElementById('modal-add-timeline')) {
    closeAddTimelineModal();
  }
}

function submitAddTimeline() {
  let modId = document.getElementById('add-tl-mod').value;
  const title = document.getElementById('add-tl-title').value.trim();
  const phase = document.getElementById('add-tl-phase').value;
  const owner = document.getElementById('add-tl-owner').value;
  const startStr = document.getElementById('add-tl-start').value;
  const endStr = document.getElementById('add-tl-end').value;

  // Handle new module creation
  if (modId === '__NEW_MOD__') {
    const newModInput = document.getElementById('add-tl-new-mod-name');
    const newModName = (newModInput ? newModInput.value.trim() : '') || `Module ${Object.keys(MODULES_DATA).length + 1}`;
    const modCount = Object.keys(MODULES_DATA).length + 1;
    modId = 'm' + modCount;
    MODULES_DATA[modId] = {
      id: modId, num: `Module ${modCount}`,
      title: newModName.startsWith('Module') ? newModName : `Module ${modCount} - ${newModName}`,
      shortTitle: `Module ${modCount}`, status: 'Planned', statusPill: 'p-none',
      progress: 0, progressCol: 'var(--text-3)', phase: 'Storyboard', target: 'TBD',
      team: [{ name: 'Ankit Verma', role: 'PRA', color: '#6d6cf0', init: 'AV' }, { name: 'Ravi Kumar', role: 'Editor', color: '#ea7c1e', init: 'RK' }],
      desc: 'New module.', lessons: []
    };
    TIMELINE_DATA[modId] = {
      id: modId, num: `M${modCount}`,
      name: `M${modCount} - ${newModName.replace(/^Module \d+\s*-?\s*/, '')}`,
      open: true, progress: 0, status: 'Planned', statusPill: 'p-none',
      staged: 'Not started', stagedBadge: 'Not Started', stagedPill: 'p-none',
      dateRange: 'TBD', spanStart: 24, spanEnd: 44,
      finalized: [], changeHistory: [], items: []
    };
    // Refresh module dropdown
    const modSel = document.getElementById('add-tl-mod');
    if (modSel) {
      const opt = document.createElement('option');
      opt.value = modId;
      opt.textContent = MODULES_DATA[modId].title;
      modSel.insertBefore(opt, modSel.querySelector('option[value="__NEW_MOD__"]'));
      modSel.value = modId;
    }
    if (document.getElementById('add-tl-new-mod-row')) document.getElementById('add-tl-new-mod-row').style.display = 'none';
    showToast(`Created new module: ${MODULES_DATA[modId].title}`, 'success');
  }

  if (!title) {
    alert('Please enter a task or milestone title.');
    document.getElementById('add-tl-title').focus();
    return;
  }
  if (!startStr || !endStr) {
    alert('Please select both start and end dates.');
    return;
  }

  // Validate start date against project start
  const projectStart = new Date('2026-09-01T00:00:00');
  const chosenStart = new Date(startStr + 'T00:00:00');
  if (chosenStart < projectStart) {
    alert('Start date cannot be earlier than the project start date (Sep 1, 2026).');
    document.getElementById('add-tl-start').focus();
    return;
  }

  // Validate weekends
  const sDate = new Date(startStr + 'T00:00:00');
  if (sDate.getDay() === 0 || sDate.getDay() === 6) {
    alert('Events cannot start on a weekend (Saturday or Sunday). Please select a weekday.');
    document.getElementById('add-tl-start').focus();
    return;
  }
  const eDate = new Date(endStr + 'T00:00:00');
  if (eDate.getDay() === 0 || eDate.getDay() === 6) {
    alert('Events cannot end on a weekend (Saturday or Sunday). Please select a weekday.');
    document.getElementById('add-tl-end').focus();
    return;
  }

  const s = dateToDayIndex(startStr);
  const e = Math.max(s + 1, dateToDayIndex(endStr));

  const colMap = {
    'Storyboard': '#6d6cf0',
    'Shoot': '#ea7c1e',
    'Editing': '#0891b2',
    'Review': '#7c3aed',
    'QC': '#059669',
    'Publishing': '#15803d'
  };

  const contents = document.getElementById('add-tl-contents') ? document.getElementById('add-tl-contents').value.trim() : '';
  const authorName = `${ROLES[curRole]?.name || 'Malhar'} (${curRole})`;

  const newItem = {
    id: 'tl-' + Date.now(),
    modId,
    lesson: title,
    task: phase,
    s,
    e,
    sStr: startStr,
    eStr: endStr,
    col: colMap[phase] || '#0891b2',
    txt: phase,
    status: 'In Progress',
    owner,
    contents: contents || `${phase} deliverable package for ${title}`,
    createdBy: `${authorName} on 10 Sep 2026`,
    lastEdited: null,
    lastEditReason: null,
    editHistory: []
  };

  if (TIMELINE_DATA[modId]) {
    TIMELINE_DATA[modId].items.push(newItem);
    TIMELINE_DATA[modId].open = true; // ensure expanded to show new item
    // update span
    TIMELINE_DATA[modId].spanStart = Math.min(TIMELINE_DATA[modId].spanStart, s);
    TIMELINE_DATA[modId].spanEnd = Math.max(TIMELINE_DATA[modId].spanEnd, e);
  }

  closeAddTimelineModal();
  document.getElementById('add-tl-title').value = '';
  if (document.getElementById('add-tl-contents')) document.getElementById('add-tl-contents').value = '';
  buildGantt();
  showToast(`<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="1" y="3" width="14" height="12" rx="1.5" /><path d="M5 1v4M11 1v4M1 7h14" /></svg> Added "${title}" (${phase}) to schedule`, 'success');
}


/* =============================================
   TIMELINE ITEM / EVENT DETAILS MODAL
   ============================================= */

function openTimelineItemInfo(itemId) {
  const found = findTimelineItem(itemId);
  if (!found) return;
  const { item, mod } = found;
  refreshTimelineItemStatus(item);

  const d1 = new Date(item.sStr + 'T00:00:00');
  const d2 = new Date(item.eStr + 'T00:00:00');
  const diffDays = Math.max(1, Math.round((d2 - d1) / (1000 * 60 * 60 * 24)) + 1);

  document.getElementById('tl-info-title').innerHTML = `<span>📌</span> ${item.lesson}`;
  document.getElementById('tl-info-sub').textContent = `${mod.name} · Phase: ${item.task}`;

  const body = document.getElementById('tl-info-body');
  if (!body) return;

  // Atomic Phase Pipeline calculation
  const sameLessonEvents = (mod.items || []).filter(i => i.lesson.toLowerCase() === item.lesson.toLowerCase()).sort((a, b) => a.s - b.s);
  let atomicPipelineHtml = '';
  if (sameLessonEvents.length > 1) {
    atomicPipelineHtml = `
      <!-- Atomic Phase Lifecycle Pipeline -->
      <div class="drawer-section">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px">
          <div class="drawer-section-title" style="margin-bottom:0">Atomic Task Lifecycle (${sameLessonEvents.length} Events Scheduled)</div>
          <span class="pill p-complete" style="font-size:9.5px">Atomic Tracking</span>
        </div>
        <div style="background:var(--surface-2);border:1px solid var(--border);border-radius:8px;padding:10px 12px">
          <div style="display:flex;align-items:center;gap:6px;overflow-x:auto;padding-bottom:4px">
            ${sameLessonEvents.map((ev, idx) => `
              <div style="flex-shrink:0;background:${ev.id === item.id ? 'var(--surface)' : 'var(--surface-2)'};border:1.5px solid ${ev.id === item.id ? ev.col : 'var(--border)'};border-radius:7px;padding:7px 10px;min-width:125px;cursor:pointer" onclick="openTimelineItemInfo('${ev.id}')" title="Click to inspect this phase event">
                <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:2px">
                  <span style="font-size:9.5px;color:var(--text-3);font-weight:700;text-transform:uppercase">Phase ${idx + 1}</span>
                  ${ev.id === item.id ? '<span style="font-size:9px;background:var(--primary);color:white;padding:0 4px;border-radius:4px">Viewing</span>' : ''}
                </div>
                <div style="font-weight:700;font-size:12px;color:${ev.col}">${escapeHtml(ev.task)}</div>
                <div style="font-size:10.5px;color:var(--text-2);margin-top:3px"><svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="1" y="3" width="14" height="12" rx="1.5"/><path d="M5 1v4M11 1v4M1 7h14"/></svg> ${ev.sStr.slice(5)} – ${ev.eStr.slice(5)}</div>
                <div style="font-size:10px;color:var(--text-3);margin-top:2px">👤 ${escapeHtml(ev.owner || 'Unassigned')}</div>
              </div>
              ${idx < sameLessonEvents.length - 1 ? '<span style="color:var(--text-3);font-size:14px;flex-shrink:0">➔</span>' : ''}
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }

  // Build edit history trail
  let histHtml = '';
  if (item.editHistory && item.editHistory.length > 0) {
    histHtml = item.editHistory.map(h => `
      <div style="background:var(--surface-2);border:1px solid var(--border);border-radius:8px;padding:9px 12px;margin-bottom:7px;font-size:11.5px">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px">
          <b style="color:var(--text)"><svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="1" y="3" width="14" height="12" rx="1.5"/><path d="M5 1v4M11 1v4M1 7h14"/></svg> ${h.oldDates} ➔ ${h.newDates}</b>
          <span style="color:var(--text-3);font-size:10.5px">${h.date}</span>
        </div>
        <div style="color:var(--text-2);margin-bottom:4px"><b>Reason:</b> ${escapeHtml(h.reason)}</div>
        <div style="font-size:10.5px;color:var(--text-3)">Edited by ${h.by}</div>
      </div>
    `).join('');
  } else if (item.lastEdited) {
    histHtml = `
      <div style="background:var(--surface-2);border:1px solid var(--border);border-radius:8px;padding:9px 12px;margin-bottom:7px;font-size:11.5px">
        <div style="color:var(--text-2);margin-bottom:4px"><b>Reason:</b> ${escapeHtml(item.lastEditReason || 'Schedule adjusted')}</div>
        <div style="font-size:10.5px;color:var(--text-3)">${item.lastEdited}</div>
      </div>
    `;
  } else {
    histHtml = `
      <div style="font-size:12px;color:var(--text-3);font-style:italic;padding:6px 0">
        ✨ Initial schedule - no date shifts or revisions made yet.
      </div>
    `;
  }

  body.innerHTML = `
              <!-- Top Schedule Card -->
              <div style="background:var(--surface-2);border:1px solid var(--border);border-radius:9px;padding:12px 14px;margin-bottom:14px">
                <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
                  <span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:var(--text-3)">Schedule Timeline</span>
                  <span class="pill ${timelineStatusClass(item.status)}" style="font-weight:700">${item.overdue ? '⚠ ' : ''}${item.status}</span>
                </div>

                <div class="grid-2" style="gap:10px;margin-bottom:10px">
                  <div style="background:var(--surface);border:1px solid var(--border);border-radius:7px;padding:8px 11px">
                    <div style="font-size:10.5px;color:var(--text-3);text-transform:uppercase;letter-spacing:.04em;margin-bottom:2px">Start Date</div>
                    <div style="font-size:13px;font-weight:700;color:var(--text);display:flex;align-items:center;gap:6px">
                      <span><svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="1" y="3" width="14" height="12" rx="1.5" /><path d="M5 1v4M11 1v4M1 7h14" /></svg></span> ${item.sStr}
                    </div>
                  </div>
                  <div style="background:var(--surface);border:1px solid var(--border);border-radius:7px;padding:8px 11px">
                    <div style="font-size:10.5px;color:var(--text-3);text-transform:uppercase;letter-spacing:.04em;margin-bottom:2px">End Date</div>
                    <div style="font-size:13px;font-weight:700;color:var(--text);display:flex;align-items:center;gap:6px">
                      <span>🏁</span> ${item.eStr}
                    </div>
                  </div>
                </div>

                <div style="display:flex;align-items:center;justify-content:space-between;font-size:12px;color:var(--text-2);padding-top:2px">
                  <span><b>Duration:</b> ${diffDays} day${diffDays > 1 ? 's' : ''}</span>
                  <span><b>Assignee:</b> 👤 ${item.owner || 'Unassigned'}</span>
                </div>
              </div>

              <div class="drawer-section">
                <div class="drawer-section-title">Event Status</div>
                <div style="display:flex;gap:8px;align-items:center">
                  <select class="form-input" id="timeline-event-status" style="margin:0;flex:1">
                    <option value="Yet to start" ${item.status === 'Yet to start' ? 'selected' : ''}>Yet to start</option>
                    <option value="In Progress" ${item.status === 'In Progress' ? 'selected' : ''}>In Progress</option>
                    <option value="Completed" ${item.status === 'Completed' ? 'selected' : ''}>Completed</option>
                  </select>
                  <button class="btn btn-primary btn-sm" onclick="updateTimelineItemStatus('${item.id}')">Update Status</button>
                </div>
                ${item.overdue ? '<div style="font-size:11.5px;color:var(--danger);margin-top:7px">⚠ The end date has passed and this event has not been marked completed. “Not updated yet” is applied automatically.</div>' : ''}
                ${item.future ? '<div style="font-size:11.5px;color:var(--success);margin-top:7px">ℹ The event is yet to start. "Yet to start" is applied automatically based on the schedule date.</div>' : ''}
              </div>

              ${atomicPipelineHtml}

              <!-- Contents & Scope -->
              <div class="drawer-section">
                <div class="drawer-section-title">Deliverable Contents &amp; Scope</div>
                <div style="background:var(--surface-2);border:1px solid var(--border);border-radius:8px;padding:10px 12px;font-size:12px;line-height:1.5;color:var(--text)">
                  ${escapeHtml(item.contents || 'Standard lesson deliverable as per course syllabus.')}
                </div>
              </div>

              <!-- Created By -->
              <div class="drawer-section">
                <div class="drawer-section-title">Created By</div>
                <div style="background:var(--surface-2);border:1px solid var(--border);border-radius:8px;padding:9px 12px;font-size:12px">
                  <div style="display:flex;align-items:center;gap:7px;color:var(--text)">
                    <span>👤</span>
                    <span><b>Created by:</b> ${item.createdBy || 'Malhar (Manager) on 25 Aug 2026'}</span>
                  </div>
                </div>
              </div>

              <!-- Last Edited By & Reason -->
              <div class="drawer-section" style="margin-bottom:0">
                <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px">
                  <div class="drawer-section-title" style="margin-bottom:0">Last Edited &amp; Reason Log</div>
                  ${item.lastEdited ? '<span class="pill p-warning" style="font-size:9.5px">Modified</span>' : '<span class="pill p-complete" style="font-size:9.5px">Original</span>'}
                </div>
                ${histHtml}
              </div>
              `;

  const editAction = () => {
    closeTimelineItemInfo();
    openEditTimelineModal(item.id);
  };
  const headBtn = document.getElementById('tl-info-edit-head-btn');
  if (headBtn) headBtn.onclick = editAction;
  const footBtn = document.getElementById('tl-info-edit-btn');
  if (footBtn) footBtn.onclick = editAction;

  document.getElementById('modal-timeline-item-info').classList.add('open');
}

function closeTimelineItemInfo() {
  const m = document.getElementById('modal-timeline-item-info');
  if (m) m.classList.remove('open');
}

function closeTimelineItemInfoOut(e) {
  if (e.target === document.getElementById('modal-timeline-item-info')) {
    closeTimelineItemInfo();
  }
}

function updateTimelineItemStatus(itemId) {
  const found = findTimelineItem(itemId);
  const select = document.getElementById('timeline-event-status');
  if (!found || !select) return;
  const { item } = found;
  item.status = select.value;
  item.overdue = false;
  buildGantt();
  openTimelineItemInfo(itemId);
  showToast('Timeline event status updated to ' + item.status + '.', 'success');
}

/* Edit Schedule Dates with Mandatory Reason Logging */
function findTimelineItem(itemId) {
  for (const modId of Object.keys(TIMELINE_DATA)) {
    const it = TIMELINE_DATA[modId].items.find(i => i.id === itemId);
    if (it) return { item: it, mod: TIMELINE_DATA[modId] };
  }
  return null;
}

function openEditTimelineModal(itemId) {
  const found = findTimelineItem(itemId);
  if (!found) return;
  const { item, mod } = found;

  document.getElementById('edit-tl-item-id').value = item.id;
  document.getElementById('edit-tl-sub').textContent = `${mod.name} · ${item.lesson} (${item.task})`;
  document.getElementById('edit-tl-start').value = item.sStr || '2026-09-08';
  document.getElementById('edit-tl-end').value = item.eStr || '2026-09-11';
  document.getElementById('edit-tl-reason').value = '';

  document.getElementById('modal-edit-timeline').classList.add('open');
  setTimeout(() => {
    const el = document.getElementById('edit-tl-reason');
    if (el) el.focus();
  }, 80);
}

function closeEditTimelineModal() {
  document.getElementById('modal-edit-timeline').classList.remove('open');
}

function closeEditTimelineModalOut(e) {
  if (e.target === document.getElementById('modal-edit-timeline')) {
    closeEditTimelineModal();
  }
}

function setReasonText(txt) {
  const r = document.getElementById('edit-tl-reason');
  if (r) {
    r.value = txt;
    r.focus();
  }
}

function submitEditTimeline() {
  const itemId = document.getElementById('edit-tl-item-id').value;
  const newStartStr = document.getElementById('edit-tl-start').value;
  const newEndStr = document.getElementById('edit-tl-end').value;
  const reason = document.getElementById('edit-tl-reason').value.trim();

  if (!reason) {
    alert('Please provide a reason for changing the schedule. This is required for the timeline audit trail.');
    document.getElementById('edit-tl-reason').focus();
    return;
  }

  // Validate weekends
  const sDate = new Date(newStartStr + 'T00:00:00');
  if (sDate.getDay() === 0 || sDate.getDay() === 6) {
    alert('Events cannot start on a weekend (Saturday or Sunday). Please select a weekday.');
    document.getElementById('edit-tl-start').focus();
    return;
  }
  const eDate = new Date(newEndStr + 'T00:00:00');
  if (eDate.getDay() === 0 || eDate.getDay() === 6) {
    alert('Events cannot end on a weekend (Saturday or Sunday). Please select a weekday.');
    document.getElementById('edit-tl-end').focus();
    return;
  }

  const found = findTimelineItem(itemId);
  if (!found) return;
  const { item, mod } = found;

  const oldDates = `${item.sStr} – ${item.eStr}`;
  const newDates = `${newStartStr} – ${newEndStr}`;
  const editorName = `${ROLES[curRole]?.name || 'Malhar'} (${curRole})`;

  // Log to item's edit history and metadata
  if (!item.editHistory) item.editHistory = [];
  item.editHistory.unshift({
    date: '10 Sep 2026',
    by: editorName,
    oldDates,
    newDates,
    reason: reason
  });
  item.lastEdited = `${editorName} on 10 Sep 2026`;
  item.lastEditReason = reason;

  // Log to module's change history
  mod.changeHistory.unshift({
    date: '10 Sep',
    user: editorName,
    oldDates,
    newDates,
    reason,
    task: `${item.lesson} (${item.task})`
  });

  // Update item dates
  item.sStr = newStartStr;
  item.eStr = newEndStr;
  item.s = dateToDayIndex(newStartStr);
  item.e = Math.max(item.s + 1, dateToDayIndex(newEndStr));

  // If item was overdue and new end date is after Sep 10, clear overdue tag
  if (item.e > 9 && item.txt.includes('Overdue')) {
    item.txt = item.task;
    item.col = '#7c3aed';
    item.overdue = false;
  }

  closeEditTimelineModal();
  buildGantt();
  showToast(`<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="8" cy="8" r="6.5" /><path d="M5 8l2.5 2.5L11 6" /></svg> Schedule updated & reason logged to audit trail`, 'success');

  // If item info modal is currently open for this item, refresh it live
  const infoModal = document.getElementById('modal-timeline-item-info');
  if (infoModal && infoModal.classList.contains('open')) {
    openTimelineItemInfo(itemId);
  }
}

/* Module Milestones & Progress Drawer */
function openModuleTimelineDetail(modId) {
  const mod = TIMELINE_DATA[modId];
  if (!mod) return;

  document.getElementById('tl-detail-title').innerHTML = `<span><svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M8 1l6 3v8l-6 3-6-3V4l6-3z" /><path d="M8 1v14M2 4l6 3 6-3" /></svg></span> ${mod.name}`;
  document.getElementById('tl-detail-sub').textContent = `Status: ${mod.status} · Schedule: ${mod.dateRange}`;

  const body = document.getElementById('tl-detail-body');
  if (!body) return;

  const finHtml = mod.finalized.length > 0 ? mod.finalized.map(f => `
              <div class="final-item">
                <div style="font-size:14px;color:var(--success);line-height:1">&#10003;</div>
                <div style="flex:1;min-width:0">
                  <div style="font-weight:600;color:var(--text)">${f.item}</div>
                  <div style="font-size:11px;color:var(--text-3)">Completed on ${f.date} · Sign-off: ${f.by}</div>
                </div>
                <span class="pill p-complete" style="font-size:9.5px">Finalised</span>
              </div>
              `).join('') : `<div style="font-size:12px;color:var(--text-3);font-style:italic;padding:8px 0">No deliverables finalised yet for this module.</div>`;

  const histHtml = mod.changeHistory.length > 0 ? mod.changeHistory.map(h => `
              <div style="background:var(--surface-2);border:1px solid var(--border);border-radius:8px;padding:9px 12px;margin-bottom:7px;font-size:11.5px">
                <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:3px">
                  <b style="color:var(--text)"><svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="1" y="3" width="14" height="12" rx="1.5" /><path d="M5 1v4M11 1v4M1 7h14" /></svg> ${h.oldDates} ➔ ${h.newDates}</b>
                  <span style="color:var(--text-3);font-size:10.5px">${h.date}</span>
                </div>
                <div style="color:var(--text-2);margin-bottom:3px"><b>Reason:</b> ${escapeHtml(h.reason)}</div>
                <div style="font-size:10.5px;color:var(--text-3)">Logged by ${h.user}${h.task ? ' · ' + h.task : ''}</div>
              </div>
              `).join('') : `<div style="font-size:12px;color:var(--text-3);font-style:italic;padding:8px 0">No timeline revisions logged for this module.</div>`;

  const itemsHtml = mod.items.length > 0 ? mod.items.map(it => `
              <div style="display:flex;align-items:center;justify-content:space-between;padding:7px 10px;background:var(--surface-2);border:1px solid var(--border);border-radius:7px;margin-bottom:5px;font-size:12px">
                <div style="cursor:pointer;flex:1" onclick="closeTimelineDetailModal();openTimelineItemInfo('${it.id}')" title="Click to view details &amp; history">
                  <span style="font-weight:600;color:var(--text)">${it.lesson}</span>
                  <span style="color:var(--text-3);margin-left:6px">${it.task}</span>
                  <div style="font-size:10.5px;color:var(--text-3);margin-top:2px">Dates: ${it.sStr} to ${it.eStr} · Assignee: ${it.owner}</div>
                </div>
                <div style="display:flex;gap:5px">
                  <button class="btn btn-ghost btn-xs" onclick="closeTimelineDetailModal();openTimelineItemInfo('${it.id}')" title="View details">ℹ️ Info</button>
                  <button class="btn btn-ghost btn-xs" onclick="closeTimelineDetailModal();openEditTimelineModal('${it.id}')" title="Edit dates"><svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M11 2l3 3-8 8H3v-3l8-8z" /></svg> Edit</button>
                </div>
              </div>
              `).join('') : `<div style="font-size:12px;color:var(--text-3);font-style:italic">No scheduled items.</div>`;

  body.innerHTML = `
              <!-- Progress Header Card -->
              <div style="background:var(--surface-2);border:1px solid var(--border);border-radius:9px;padding:12px 14px;margin-bottom:16px">
                <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px">
                  <span style="font-size:12px;font-weight:700;color:var(--text)">Overall Module Completion</span>
                  <span class="pill ${mod.statusPill}" style="font-weight:700">${mod.progress}% · ${mod.status}</span>
                </div>
                <div class="ov-progress-bar" style="margin:6px 0 8px">
                  <div class="ov-progress-fill" style="width:${mod.progress}%;background:${mod.progress === 100 ? 'var(--success)' : 'var(--accent)'}"></div>
                </div>
                <div style="display:flex;align-items:center;gap:8px;font-size:11.5px;color:var(--text-2);margin-top:4px">
                  <span>${mod.stagedBadge === 'Live' ? '<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M8 1s4 1 4 7c0 2-1 4-4 6C5 12 4 10 4 8c0-6 4-7 4-7z"/><circle cx="8" cy="8" r="1.5" fill="currentColor" stroke="none"/><path d="M5 12l-3 3M11 12l3 3"/></svg>' : '⏳'}</span>
                  <span><b>LMS Status:</b> <span class="pill ${mod.stagedPill}" style="font-size:9.5px">${mod.stagedBadge}</span> ${mod.staged}</span>
                </div>
              </div>

              <!-- Finalised Items -->
              <div class="drawer-section">
                <div class="drawer-section-title">Finalised Deliverables &amp; Sign-offs</div>
                ${finHtml}
              </div>

              <!-- Scheduled Work Items -->
              <div class="drawer-section">
                <div class="drawer-section-title">Scheduled Timeline Milestones</div>
                ${itemsHtml}
              </div>

              <!-- Change Reason History -->
              <div class="drawer-section" style="margin-bottom:0">
                <div class="drawer-section-title">Timeline Change History &amp; Reason Log</div>
                ${histHtml}
              </div>
  `;

  document.getElementById('tl-detail-add-btn').onclick = () => {
    closeTimelineDetailModal();
    openAddTimelineModal(modId);
  };

  document.getElementById('modal-timeline-detail').classList.add('open');
}

function closeTimelineDetailModal() {
  document.getElementById('modal-timeline-detail').classList.remove('open');
}

function closeTimelineDetailModalOut(e) {
  if (e.target === document.getElementById('modal-timeline-detail')) {
    closeTimelineDetailModal();
  }
}








/* =============================================
   MODULES & WORK ITEMS DATA
   ============================================= */




/* =============================================
   TREE & MODULE WORK NAVIGATION
   ============================================= */

function collapseAllModules() {
  document.querySelectorAll('.tree-children').forEach(el => el.classList.remove('open'));
  document.querySelectorAll('.tree-chev').forEach(el => el.classList.remove('open'));
}

function expandAllModules() {
  document.querySelectorAll('.tree-children').forEach(el => el.classList.add('open'));
  document.querySelectorAll('.tree-chev').forEach(el => el.classList.add('open'));
}

function toggleTreeMod(modId, event) {
  if (event) event.stopPropagation();
  const ch = document.getElementById('ch-' + modId);
  const cv = document.getElementById('chev-' + modId);
  if (!ch) return;
  const isOpen = ch.classList.contains('open');
  ch.classList.toggle('open', !isOpen);
  if (cv) cv.classList.toggle('open', !isOpen);
}

function clickTreeMod(modId) {
  // Select this module and display its overview
  const ch = document.getElementById('ch-' + modId);
  const cv = document.getElementById('chev-' + modId);
  if (ch && !ch.classList.contains('open')) {
    ch.classList.add('open');
    if (cv) cv.classList.add('open');
  }
  selMod(modId);
}

function openModuleWork(modId) {
  // Collapse other modules to keep view clean & focused
  collapseAllModules();
  // Expand only this module
  const ch = document.getElementById('ch-' + modId);
  const cv = document.getElementById('chev-' + modId);
  if (ch) ch.classList.add('open');
  if (cv) cv.classList.add('open');

  // Open the screen after expanding the requested module. This prevents
  // nav('work') from trying to open the default module recursively.
  nav('work');
  // Render module overview
  selMod(modId);
}

function openLessonWork(lessonId) {
  nav('work');
  selLesson(lessonId);
}

function toggleTree(id) {
  toggleTreeMod(id);
}


/* =============================================
   MODULE OVERVIEW & LESSON DETAIL
   ============================================= */









/* =============================================
   MODAL
   ============================================= */

function openModal() {
  if (curRole !== 'Manager') { showToast('ℹ️  Only managers can create projects'); return; }
  document.getElementById('modal-back').classList.add('open');
  setTimeout(() => document.getElementById('new-name').focus(), 80);
}


/* =============================================
   WORK ITEMS & NOTES MODALS JS HANDLERS
   ============================================= */

function openAddLessonModal(modId) {
  if (modId && document.getElementById('add-les-mod')) {
    document.getElementById('add-les-mod').value = modId;
  }
  document.getElementById('modal-add-lesson').classList.add('open');
  setTimeout(() => {
    const el = document.getElementById('add-les-title');
    if (el) el.focus();
  }, 80);
}
function closeAddLessonModal() {
  document.getElementById('modal-add-lesson').classList.remove('open');
}
function closeAddLessonModalOut(e) {
  if (e.target === document.getElementById('modal-add-lesson')) closeAddLessonModal();
}

function quickAssignLesson(modId, lessonId, newOwner) {
  if (!newOwner) return;
  let mod = MODULES_DATA[modId];
  if (!mod) {
    for (const mId in MODULES_DATA) {
      if (MODULES_DATA[mId].lessons && MODULES_DATA[mId].lessons.some(l => l.id === lessonId)) {
        mod = MODULES_DATA[mId];
        modId = mId;
        break;
      }
    }
  }
  if (!mod) return;
  const l = mod.lessons.find(x => x.id === lessonId);
  if (!l) return;

  const oldOwner = l.owner;
  l.owner = newOwner;
  const colorMap = {
    'Ankit Verma': '#0891b2',
    'Ravi Kumar': '#ea7c1e',
    'Stuti Garg': 'var(--success)',
    'Priya S': 'var(--accent)',
    'Malhar': 'var(--accent)',
    'Unassigned': '#94a3b8'
  };
  l.ownerColor = colorMap[newOwner] || '#94a3b8';

  // Record audit note entry
  if (!l.notes) l.notes = [];
  const authorName = `${ROLES[curRole]?.name || 'Malhar'} (${curRole})`;
  const getInitials = (name) => name === 'Unassigned' ? '-' : name.split(' ').map(w => w[0]).join('');
  const noteId = 'n-' + Date.now();
  l.notes.push({
    id: noteId,
    author: authorName,
    role: curRole,
    color: ROLES[curRole]?.color || 'var(--accent)',
    init: getInitials(ROLES[curRole]?.name || 'Malhar'),
    time: 'Just now',
    text: `👤 Assigned owner to "${newOwner}" (previously: ${oldOwner}).`,
    isAudit: true
  });

  // Sync timeline data if matching event exists
  if (typeof TIMELINE_DATA !== 'undefined' && Array.isArray(TIMELINE_DATA)) {
    const tItem = TIMELINE_DATA.find(t => t.modId === modId && t.title && t.title.toLowerCase().includes(l.title.toLowerCase()));
    if (tItem) {
      tItem.owner = newOwner;
    }
  }

  // Re-render sidebar tree and module overview
  renderWorkItemsTree();
  const currentDetailView = document.getElementById('work-detail');
  if (currentDetailView && currentDetailView.classList.contains('show')) {
    renderLessonDetail(mod, l);
  } else {
    selMod(modId);
  }

  showToast(`👤 ${l.title}: Assigned to ${newOwner}`, 'success');
}
function submitAddLesson() {
  const modId = document.getElementById('add-les-mod').value;
  const title = document.getElementById('add-les-title').value.trim();
  const itemTitle = document.getElementById('add-les-item-title').value.trim() || 'Deliverable Item';
  const phase = document.getElementById('add-les-phase').value;
  const status = document.getElementById('add-les-status').value;
  const owner = document.getElementById('add-les-owner').value;
  const dueRaw = document.getElementById('add-les-due').value;
  const desc = document.getElementById('add-les-desc').value.trim() || 'Standard lesson deliverable scope.';

  if (!title) {
    alert('Please enter a lesson title.');
    document.getElementById('add-les-title').focus();
    return;
  }

  const dObj = dueRaw ? new Date(dueRaw + 'T00:00:00') : new Date();
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const dueFormatted = dueRaw ? `${monthNames[dObj.getMonth()]} ${dObj.getDate()}` : '-';

  const newId = `${modId}l${Date.now().toString().slice(-4)}`;
  const ownerColorMap = {
    'Ravi Kumar (Editor)': '#ea7c1e',
    'Ankit Verma (PRA)': '#6d6cf0',
    'Stuti Garg (QC)': 'var(--success)',
    'Malhar (Manager)': 'var(--accent)'
  };

  const authorName = `${ROLES[curRole]?.name || 'Malhar'} (${curRole})`;
  const newLesson = {
    id: newId,
    title,
    fullTitle: `${modId.toUpperCase()} · ${title}`,
    itemTitle,
    phase,
    status,
    version: 'V1',
    owner: owner.split(' ')[0] + ' ' + (owner.split(' ')[1] || ''),
    ownerColor: ownerColorMap[owner] || '#6d6cf0',
    due: dueFormatted,
    desc,
    notes: [
      {
        id: 'note-' + Date.now(),
        author: authorName,
        role: curRole,
        text: `✨ Lesson created in ${modId.toUpperCase()} with status "${status}" (${phase})`,
        time: formatCurrentTime(),
        color: 'var(--accent)',
        init: getInitials(ROLES[curRole]?.name || 'Malhar'),
        isAudit: true
      }
    ]
  };

  if (MODULES_DATA[modId]) {
    MODULES_DATA[modId].lessons.push(newLesson);
  }

  // Sync with TIMELINE_DATA
  if (TIMELINE_DATA[modId]) {
    const startIdx = typeof dateToDayIndex === 'function' ? dateToDayIndex(dueRaw || '2026-09-20') : 15;
    TIMELINE_DATA[modId].items.push({
      id: 'tl-' + Date.now(),
      modId,
      lesson: title,
      task: phase,
      s: startIdx,
      e: startIdx + 5,
      sStr: dueRaw || '2026-09-20',
      eStr: '2026-09-25',
      col: phase === 'Shoot' ? '#ea7c1e' : phase === 'Editing' ? '#0891b2' : phase === 'Review' ? '#7c3aed' : '#6d6cf0',
      txt: phase,
      status: phase,
      owner: owner.split(' ')[0] + ' ' + (owner.split(' ')[1] || ''),
      contents: desc,
      createdBy: `${authorName} on 10 Sep 2026`,
      editHistory: []
    });
    if (typeof buildGantt === 'function') buildGantt();
  }

  closeAddLessonModal();
  document.getElementById('add-les-title').value = '';
  document.getElementById('add-les-item-title').value = '';
  document.getElementById('add-les-desc').value = '';

  selLesson(newId);
  showToast(`✨ Created "${title}" under ${modId.toUpperCase()}`, 'success');
}

function openAddModuleModal() {
  document.getElementById('modal-add-module').classList.add('open');
  setTimeout(() => {
    const el = document.getElementById('add-mod-title');
    if (el) el.focus();
  }, 80);
}
function closeAddModuleModal() {
  document.getElementById('modal-add-module').classList.remove('open');
}
function closeAddModuleModalOut(e) {
  if (e.target === document.getElementById('modal-add-module')) closeAddModuleModal();
}
function submitAddModule() {
  const title = document.getElementById('add-mod-title').value.trim();
  const phase = document.getElementById('add-mod-phase').value;
  const target = document.getElementById('add-mod-target').value.trim() || 'Oct 2026';
  const desc = document.getElementById('add-mod-desc').value.trim() || 'New module syllabus scope.';

  if (!title) {
    alert('Please enter a module title.');
    document.getElementById('add-mod-title').focus();
    return;
  }

  const modCount = Object.keys(MODULES_DATA).length + 1;
  const modId = 'm' + modCount;

  MODULES_DATA[modId] = {
    id: modId,
    num: `Module ${modCount}`,
    title: title.startsWith('Module') ? title : `Module ${modCount} - ${title}`,
    shortTitle: `Module ${modCount}`,
    status: 'Planned',
    statusPill: 'p-none',
    progress: 0,
    progressCol: 'var(--text-3)',
    phase,
    target,
    team: [
      { name: 'Ankit Verma', role: 'PRA', color: '#6d6cf0', init: 'AV' },
      { name: 'Ravi Kumar', role: 'Editor', color: '#ea7c1e', init: 'RK' }
    ],
    desc,
    lessons: []
  };

  TIMELINE_DATA[modId] = {
    id: modId,
    num: `M${modCount}`,
    name: `M${modCount} - ${title.replace(/^Module \d+\s*-\s*/, '')}`,
    open: true,
    progress: 0,
    status: 'Planned',
    statusPill: 'p-none',
    staged: 'Not started',
    stagedBadge: 'Not Started',
    stagedPill: 'p-none',
    dateRange: 'Sep 25 – Oct 15',
    spanStart: 24,
    spanEnd: 44,
    finalized: [],
    changeHistory: [],
    items: []
  };

  closeAddModuleModal();
  document.getElementById('add-mod-title').value = '';
  document.getElementById('add-mod-desc').value = '';

  if (typeof buildGantt === 'function') buildGantt();
  selMod(modId);
  showToast(`<svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M8 1l6 3v8l-6 3-6-3V4l6-3z"/><path d="M8 1v14M2 4l6 3 6-3"/></svg> Created "${MODULES_DATA[modId].title}"`, 'success');
}

function openChangeStatusModal(modId, lessonId) {
  const mod = MODULES_DATA[modId];
  const les = mod ? mod.lessons.find(l => l.id === lessonId) : null;
  if (!les) return;

  document.getElementById('change-status-mod-id').value = modId;
  document.getElementById('change-status-les-id').value = lessonId;
  document.getElementById('change-status-phase').value = les.phase;
  document.getElementById('change-status-val').value = les.status;
  document.getElementById('change-status-sub').textContent = `${mod.num} · ${les.title}`;
  document.getElementById('modal-change-status').classList.add('open');
}
function closeChangeStatusModal() {
  document.getElementById('modal-change-status').classList.remove('open');
}
function closeChangeStatusModalOut(e) {
  if (e.target === document.getElementById('modal-change-status')) closeChangeStatusModal();
}
function submitChangeStatus() {
  const modId = document.getElementById('change-status-mod-id').value;
  const lessonId = document.getElementById('change-status-les-id').value;
  const newPhase = document.getElementById('change-status-phase').value;
  const newStatus = document.getElementById('change-status-val').value;
  const noteText = document.getElementById('change-status-note').value.trim();

  const mod = MODULES_DATA[modId];
  const les = mod ? mod.lessons.find(l => l.id === lessonId) : null;
  if (!les) return;

  const oldStatus = les.status;
  const oldPhase = les.phase;
  les.status = newStatus;
  les.phase = newPhase;

  // Add audit note
  const authorName = `${ROLES[curRole]?.name || 'Malhar'} (${curRole})`;
  les.notes = les.notes || [];
  les.notes.push({
    id: 'note-' + Date.now(),
    author: authorName,
    role: curRole,
    text: `<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M2 8a6 6 0 1110.4-4.1M2 4v4h4"/></svg> Status updated: ${oldPhase} (${oldStatus}) ➔ ${newPhase} (${newStatus})` + (noteText ? ` - Remark: ${noteText}` : ''),
    time: formatCurrentTime(),
    color: 'var(--accent)',
    init: getInitials(ROLES[curRole]?.name || 'Malhar'),
    isAudit: true
  });

  closeChangeStatusModal();
  document.getElementById('change-status-note').value = '';

  renderLessonDetail(mod, les);
  showToast(`<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M2 8a6 6 0 1110.4-4.1M2 4v4h4"/></svg> Updated status for "${les.title}" to ${newStatus}`, 'success');
}

function openSetDueDateModal(modId, lessonId) {
  const mod = MODULES_DATA[modId];
  const les = mod ? mod.lessons.find(l => l.id === lessonId) : null;
  if (!les) return;

  document.getElementById('set-due-mod-id').value = modId;
  document.getElementById('set-due-les-id').value = lessonId;
  document.getElementById('set-due-sub').textContent = `${mod.num} · ${les.title} (Current Due: ${les.due})`;
  document.getElementById('set-due-reason').value = '';
  document.getElementById('modal-set-due-date').classList.add('open');
}
function closeSetDueDateModal() {
  document.getElementById('modal-set-due-date').classList.remove('open');
}
function closeSetDueDateModalOut(e) {
  if (e.target === document.getElementById('modal-set-due-date')) closeSetDueDateModal();
}
function selectSetDueDateChip(val) {
  const input = document.getElementById('set-due-reason');
  if (input) input.value = val;
}
function submitSetDueDate() {
  const modId = document.getElementById('set-due-mod-id').value;
  const lessonId = document.getElementById('set-due-les-id').value;
  const rawDate = document.getElementById('set-due-date-val').value;
  const reason = document.getElementById('set-due-reason').value.trim();

  if (!rawDate) {
    alert('Please select a new target due date.');
    return;
  }
  if (!reason) {
    alert('Please specify a reason for changing the due date (required for audit log).');
    document.getElementById('set-due-reason').focus();
    return;
  }

  const dObj = new Date(rawDate + 'T00:00:00');
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const formattedDueDate = `${monthNames[dObj.getMonth()]} ${dObj.getDate()}`;

  const mod = MODULES_DATA[modId];
  const les = mod ? mod.lessons.find(l => l.id === lessonId) : null;
  if (!les) return;

  const oldDue = les.due;
  les.due = formattedDueDate;

  const authorName = `${ROLES[curRole]?.name || 'Malhar'} (${curRole})`;
  les.notes = les.notes || [];
  les.notes.push({
    id: 'note-' + Date.now(),
    author: authorName,
    role: curRole,
    text: `<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="1" y="3" width="14" height="12" rx="1.5"/><path d="M5 1v4M11 1v4M1 7h14"/></svg> Due date modified: ${oldDue} ➔ ${formattedDueDate} - Reason: ${reason}`,
    time: formatCurrentTime(),
    color: 'var(--warning)',
    init: getInitials(ROLES[curRole]?.name || 'Malhar'),
    isAudit: true
  });

  closeSetDueDateModal();
  renderLessonDetail(mod, les);
  showToast(`<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="1" y="3" width="14" height="12" rx="1.5"/><path d="M5 1v4M11 1v4M1 7h14"/></svg> Updated due date for "${les.title}" to ${formattedDueDate}`, 'success');
}

/* Notes Add / Edit / Delete with Audit Trail */
function formatCurrentTime() {
  const now = new Date();
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  let hrs = now.getHours();
  const mins = now.getMinutes().toString().padStart(2, '0');
  const ampm = hrs >= 12 ? 'PM' : 'AM';
  hrs = hrs % 12 || 12;
  return `${now.getDate()} ${monthNames[now.getMonth()]} · ${hrs}:${mins} ${ampm}`;
}

function getInitials(name) {
  if (!name) return 'PM';
  const parts = name.trim().split(' ');
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
  return name.slice(0, 2).toUpperCase();
}

function submitAddLessonNote(modId, lessonId) {
  const mod = MODULES_DATA[modId];
  const les = mod ? mod.lessons.find(l => l.id === lessonId) : null;
  if (!les) return;

  const input = document.getElementById(`cmt-input-${lessonId}`);
  if (!input) return;
  const text = input.value.trim();

  if (!text) {
    alert('Please enter note text before posting.');
    input.focus();
    return;
  }

  const roleColors = {
    'PRA': '#6d6cf0',
    'Editor': '#ea7c1e',
    'QC': 'var(--success)',
    'Manager': 'var(--accent)'
  };

  const authorName = ROLES[curRole]?.name || 'Malhar';
  les.notes = les.notes || [];
  les.notes.push({
    id: 'note-' + Date.now(),
    author: authorName,
    role: curRole,
    text,
    time: formatCurrentTime(),
    color: roleColors[curRole] || 'var(--accent)',
    init: getInitials(authorName),
    edited: false
  });

  input.value = '';
  renderLessonDetail(mod, les);
  // Scroll notes feed to bottom so newest note is visible
  setTimeout(() => {
    const feed = document.getElementById(`notes-feed-${lessonId}`);
    if (feed) feed.scrollTop = feed.scrollHeight;
    // Update notes avatar for current user
    const av = document.getElementById(`notes-av-${lessonId}`);
    if (av) {
      const r = ROLES[curRole];
      if (r) { av.textContent = r.initials; av.style.background = r.color; }
    }
  }, 30);
  showToast(`<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M14 10a1 1 0 01-1 1H5l-3 3V3a1 1 0 011-1h10a1 1 0 011 1v7z"/></svg> Note added`, 'success');
}

function openEditNoteModal(modId, lessonId, noteId) {
  const mod = MODULES_DATA[modId];
  const les = mod ? mod.lessons.find(l => l.id === lessonId) : null;
  const note = les ? les.notes.find(n => (n.id || '') === noteId) : null;
  if (!note) return;

  document.getElementById('edit-note-mod-id').value = modId;
  document.getElementById('edit-note-les-id').value = lessonId;
  document.getElementById('edit-note-id').value = noteId;
  document.getElementById('edit-note-text').value = note.text;
  document.getElementById('modal-edit-lesson-note').classList.add('open');
}
function closeEditNoteModal() {
  document.getElementById('modal-edit-lesson-note').classList.remove('open');
}
function closeEditNoteModalOut(e) {
  if (e.target === document.getElementById('modal-edit-lesson-note')) closeEditNoteModal();
}
function submitEditNote() {
  const modId = document.getElementById('edit-note-mod-id').value;
  const lessonId = document.getElementById('edit-note-les-id').value;
  const noteId = document.getElementById('edit-note-id').value;
  const newText = document.getElementById('edit-note-text').value.trim();

  if (!newText) {
    alert('Note text cannot be empty.');
    return;
  }

  const mod = MODULES_DATA[modId];
  const les = mod ? mod.lessons.find(l => l.id === lessonId) : null;
  const note = les ? les.notes.find(n => (n.id || '') === noteId) : null;
  if (!note) return;

  note.text = newText;
  note.edited = true;
  note.editedTime = formatCurrentTime();

  closeEditNoteModal();
  renderLessonDetail(mod, les);
  showToast('<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M11 2l3 3-8 8H3v-3l8-8z"/></svg> Note updated', 'success');
}

function deleteLessonNote(modId, lessonId, noteId) {
  const mod = MODULES_DATA[modId];
  const les = mod ? mod.lessons.find(l => l.id === lessonId) : null;
  if (!les || !les.notes) return;

  const idx = les.notes.findIndex(n => (n.id || '') === noteId);
  if (idx === -1) return;

  const noteToDelete = les.notes[idx];
  if (!confirm(`Are you sure you want to delete this note by ${noteToDelete.author}?`)) return;

  les.notes.splice(idx, 1);

  // Add system audit log entry for deletion
  const authorName = `${ROLES[curRole]?.name || 'Malhar'} (${curRole})`;
  les.notes.push({
    id: 'note-' + Date.now(),
    author: authorName,
    role: curRole,
    text: `<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M2 4h12M5 4V2.5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5V4M6 7v5M10 7v5M3 4l1 10a1 1 0 001 1h6a1 1 0 001-1l1-10"/></svg> Note by ${noteToDelete.author} was deleted on ${formatCurrentTime()}`,
    time: formatCurrentTime(),
    color: 'var(--danger)',
    init: getInitials(ROLES[curRole]?.name || 'Malhar'),
    isAudit: true
  });

  renderLessonDetail(mod, les);
  showToast('<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M2 4h12M5 4V2.5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5V4M6 7v5M10 7v5M3 4l1 10a1 1 0 001 1h6a1 1 0 001-1l1-10"/></svg> Note deleted & tracked in audit log', 'info');
}








/* =============================================
   REVIEW VERSIONS DYNAMIC DATA & HANDLERS
   ============================================= */

// Helper: calculate days remaining from a submission date (5-day window)
function calcDaysLeft(submittedDateStr) {
  if (!submittedDateStr) return null;
  const submitted = new Date(submittedDateStr);
  const expiry = new Date(submitted);
  expiry.setDate(expiry.getDate() + 5);
  const now = new Date();
  const diff = Math.ceil((expiry - now) / (1000 * 60 * 60 * 24));
  return diff;
}

function getExpiryDateStr(submittedDateStr) {
  if (!submittedDateStr) return '';
  const d = new Date(submittedDateStr);
  d.setDate(d.getDate() + 5);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${d.getDate()} ${months[d.getMonth()]}`;
}

let REVIEW_VERSIONS_DATA = [
  {
    id: 'v1',
    verTag: 'V1',
    submitter: 'Ankit Verma',
    role: 'PRA',
    time: '10 Sep · 10:42 AM',
    submittedDate: '2026-09-10',
    status: 'Awaiting Review',
    statusPill: 'p-warning',
    statusColor: 'var(--warning)',
    moduleId: 'm3',
    batchId: 'batch-m3-1',
    driveName: 'QM101 - M3, L4 - Probability Distributions - V1',
    driveUrl: 'drive.google.com/drive/folders/1aBcXyZ… (view access given)',
    note: 'V1 complete. New animated examples for Normal distribution in Section 2 (timestamp 4:23–6:45). Poisson example extended with real-world context. Please review transitions between sections and confirm all diagrams are clear.',
    attachedFiles: [
      { icon: '<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 1h7l3 3v11H3V1z"/><path d="M10 1v3h3"/><path d="M5 7h6M5 10h4"/></svg>', name: 'script-prob-dist-v1-final.docx', sub: 'Script - final draft (14 pages)', action: 'Open' },
      { icon: '<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="1" y="1" width="14" height="11" rx="1.5"/><path d="M5 9V6M8 9V4M11 9V7"/></svg>', name: 'slides-prob-dist-v1.pptx', sub: 'Slide deck - animated Normal distribution', action: 'Open' },
      { icon: '<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="1" width="10" height="14" rx="1.5"/><path d="M6 1v3M10 1v3M6 4h4M6 7h4"/></svg>', name: 'assets-prob-dist-v1.zip', sub: 'Graphics & math illustrations archive (24 MB)', action: 'Download' }
    ]
  }
];

// History: reviews that are completed, expired, or archived
let REVIEW_HISTORY = [
  {
    verTag: 'M2-L3 V1',
    lesson: 'Module 2 - L3: Bayes Theorem',
    submitter: 'Ankit Verma',
    submittedDate: '2026-09-01',
    reviewedDate: '2026-09-03',
    outcome: 'Approved',
    outcomeClass: 'p-complete',
    outcomeIcon: '&#10003;',
    reviewedBy: 'Malhar (Manager)',
    note: 'All sections clear. Approved for LMS staging.',
    driveName: 'QM101 - M2, L3 - Bayes Theorem - V1'
  },
  {
    verTag: 'M1-L2 V2',
    lesson: 'Module 1 - L2: Descriptive Statistics',
    submitter: 'Ankit Verma',
    submittedDate: '2026-08-28',
    reviewedDate: '2026-08-30',
    outcome: 'Approved',
    outcomeClass: 'p-complete',
    outcomeIcon: '&#10003;',
    reviewedBy: 'Malhar (Manager)',
    note: 'Revised voiceover noted. Approved.',
    driveName: 'QM101 - M1, L2 - Descriptive Statistics - V2'
  },
  {
    verTag: 'M3-L2 V1',
    lesson: 'Module 3 - L2: Standard Deviation',
    submitter: 'Ravi Kumar',
    submittedDate: '2026-08-18',
    reviewedDate: null,
    outcome: 'Expired',
    outcomeClass: 'p-danger',
    outcomeIcon: '⏰',
    reviewedBy: '-',
    note: 'Review window lapsed (5 days). No manager action taken.',
    driveName: 'QM101 - M3, L2 - Standard Deviation - V1'
  },
  {
    verTag: 'M1-L4 V1',
    lesson: 'Module 1 - L4: Probability Basics',
    submitter: 'Ankit Verma',
    submittedDate: '2026-09-05',
    reviewedDate: '2026-09-06',
    outcome: 'Changes Requested',
    outcomeClass: 'p-review',
    outcomeIcon: '↺',
    reviewedBy: 'Malhar (Manager)',
    note: 'Transition timing between sections needs fixing. Voiceover audio clipping at 3:45.',
    driveName: 'QM101 - M1, L4 - Probability Basics - V1'
  }
];

let curActiveVersionId = 'v1';

function checkAndExpireReviews() {
  const now = new Date();
  const toExpire = REVIEW_VERSIONS_DATA.filter(v => {
    if (v.status !== 'Awaiting Review' || !v.submittedDate) return false;
    const submitted = new Date(v.submittedDate);
    const expiry = new Date(submitted);
    expiry.setDate(expiry.getDate() + 5);
    return now > expiry;
  });

  toExpire.forEach(v => {
    // Archive to history as Expired
    REVIEW_HISTORY.unshift({
      verTag: v.verTag,
      lesson: 'QM101 - M3, L4 - Probability Distributions',
      submitter: v.submitter,
      submittedDate: v.submittedDate,
      reviewedDate: null,
      outcome: 'Expired',
      outcomeClass: 'p-danger',
      outcomeIcon: '⏰',
      reviewedBy: '-',
      note: 'Review window lapsed (5 days). No manager action was taken.',
      driveName: v.driveName
    });
    // Mark as Expired in current list (so it moves to "Reviewed" section)
    v.status = 'Expired';
    v.statusPill = 'p-danger';
    v.statusColor = 'var(--danger)';
  });

  if (toExpire.length > 0) {
    showToast(`⏰ ${toExpire.length} review(s) expired and moved to History`, 'danger');
  }
}

function selectReviewVersion(verId) {
  curActiveVersionId = verId;
  renderReviewVersions();
}

function renderReviewVersions() {
  const versionsContainer = document.getElementById('rev-versions-list');
  const deliverablesContainer = document.getElementById('rev-deliverables-container');
  if (!versionsContainer || !deliverablesContainer) return;

  // Auto-expire any reviews past 5-day window
  checkAndExpireReviews();

  // 1. Separate active queue from resolved versions
  const activeQueue = REVIEW_VERSIONS_DATA.filter(v => v.status === 'Awaiting Review' || v.status === 'Awaiting PRA Review');
  const resolvedVersions = REVIEW_VERSIONS_DATA.filter(v => v.status !== 'Awaiting Review' && v.status !== 'Awaiting PRA Review');
  const totalQueue = activeQueue.length;

  let vHtml = '';

  // Active queue section
  if (totalQueue > 0) {
    vHtml += `<div style="font-size:9.5px;text-transform:uppercase;letter-spacing:.06em;color:var(--text-3);font-weight:700;margin-bottom:6px;display:flex;align-items:center;gap:5px">Pending Review <span class="pill p-warning" style="font-size:9px;padding:1px 6px">${totalQueue}</span></div>`;
  }
  activeQueue.forEach(v => {
    const isActive = v.id === curActiveVersionId;
    const daysLeft = calcDaysLeft(v.submittedDate);
    const expiryStr = getExpiryDateStr(v.submittedDate);
    const isUrgent = daysLeft !== null && daysLeft <= 2;
    const isExpiring = daysLeft !== null && daysLeft <= 0;
    const countdownColor = isExpiring ? 'var(--danger)' : isUrgent ? 'var(--warning)' : 'var(--success)';
    const countdownLabel = isExpiring ? 'Overdue' : daysLeft === 1 ? '1 day left' : daysLeft !== null ? `${daysLeft} days left` : '';
    const urgentBorder = isUrgent ? 'border-left:3px solid var(--danger)' : '';
    vHtml += `
      <div class="ver-card ${isActive ? 'active' : ''}" onclick="selectReviewVersion('${v.id}')" style="cursor:pointer;margin-bottom:8px;${urgentBorder}">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:3px">
          <div class="ver-card-tag" style="margin-bottom:0">${v.verTag}</div>
          <span class="pill ${v.statusPill}" style="font-size:9.5px">${v.status}</span>
        </div>
        <div class="ver-card-sub" style="font-size:11px">
          By ${escapeHtml(v.submitter)}<br>${v.time}
        </div>
        ${daysLeft !== null ? `
        <div style="margin-top:5px;display:flex;align-items:center;justify-content:space-between">
          <div style="font-size:10px;color:${countdownColor};font-weight:700;display:flex;align-items:center;gap:3px">
            ⏱ ${countdownLabel}
          </div>
          <div style="font-size:9.5px;color:var(--text-3)">Exp: ${expiryStr}</div>
        </div>
        <div style="margin-top:4px;height:3px;background:var(--border-2);border-radius:2px;overflow:hidden">
          <div style="height:100%;background:${countdownColor};width:${Math.max(0, Math.min(100, (daysLeft / 5) * 100))}%;transition:width .3s"></div>
        </div>` : ''}
      </div>
    `;
  });

  // Resolved versions section
  if (resolvedVersions.length > 0) {
    if (totalQueue > 0) vHtml += `<div style="height:1px;background:var(--border);margin:8px 0"></div>`;
    vHtml += `<div style="font-size:9.5px;text-transform:uppercase;letter-spacing:.06em;color:var(--text-3);font-weight:700;margin-bottom:6px">Reviewed</div>`;
    resolvedVersions.forEach(v => {
      const isActive = v.id === curActiveVersionId;
      vHtml += `
        <div class="ver-card ${isActive ? 'active' : ''}" onclick="selectReviewVersion('${v.id}')" style="cursor:pointer;margin-bottom:8px;opacity:0.8">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:3px">
            <div class="ver-card-tag" style="margin-bottom:0;font-size:11px">${v.verTag}</div>
            <span class="pill ${v.statusPill}" style="font-size:9px">${v.status}</span>
          </div>
          <div class="ver-card-sub" style="font-size:10.5px">By ${escapeHtml(v.submitter)}<br>${v.time}</div>
        </div>
      `;
    });
  }

  // Empty state
  if (REVIEW_VERSIONS_DATA.length === 0) {
    vHtml = `<div style="text-align:center;padding:20px 10px;color:var(--text-3);font-size:12px">
      <div style="font-size:24px;margin-bottom:8px">📭</div>
      No review submissions yet.
    </div>`;
  }

  versionsContainer.innerHTML = vHtml;

  // 2. Get active version object
  const activeVer = REVIEW_VERSIONS_DATA.find(v => v.id === curActiveVersionId) || REVIEW_VERSIONS_DATA[0];
  if (!activeVer) return;

  // 3. Update main screen header status pill
  const mainPill = document.getElementById('rev-main-status-pill');
  if (mainPill) {
    mainPill.className = `pill ${activeVer.statusPill}`;
    mainPill.textContent = `${activeVer.status} (${activeVer.verTag})`;
  }

  // 4. Render deliverables container for active version
  const attachedFiles = (activeVer.attachedFiles || []).map(file => typeof file === 'string'
    ? { icon: '📎', name: file, sub: 'Linked deliverable', action: 'Open' }
    : file);
  deliverablesContainer.innerHTML = `
    <div style="padding:18px 20px 10px">
      <div class="section-label">${activeVer.verTag} Deliverables - shared by ${escapeHtml(activeVer.submitter)}, ${activeVer.time}</div>
    </div>
    <div style="padding:0 20px 16px">
      <div class="review-package-card">
        <div class="drive-card" style="margin-bottom:0;border:none;border-radius:0;box-shadow:none" onclick="window.open('${escapeHtml(activeVer.driveUrl)}', '_blank')">
          <div class="drive-icon"><svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M1 4a1 1 0 011-1h4l2 2h6a1 1 0 011 1v7a1 1 0 01-1 1H2a1 1 0 01-1-1V4z"/></svg></div>
          <div class="drive-info">
            <div class="drive-name">${escapeHtml(activeVer.driveName)}</div>
            <div class="drive-url">${escapeHtml(activeVer.driveUrl)}</div>
            <div class="drive-meta">Shared by ${escapeHtml(activeVer.submitter)} · ${activeVer.time}</div>
          </div>
          <button class="btn btn-primary btn-sm">Open Link →</button>
        </div>

        <!-- Collapsible Attached Files Bar -->
        <div class="att-files-bar" onclick="toggleAttachedFiles()">
          <div style="display:flex;align-items:center;gap:8px">
            <span style="font-size:14px">📎</span>
            <span style="font-weight:600;color:var(--text)">${attachedFiles.length} additionally attached review files</span>
            <span style="color:var(--text-3);font-size:11px">(${attachedFiles.map(f => f.name.split('.').pop()).join(', ')})</span>
          </div>
          <div style="display:flex;align-items:center;gap:6px">
            <span id="att-state-txt" style="font-size:11px;color:var(--accent);font-weight:600">Click to view</span>
            <span id="att-chev" style="font-size:11px;color:var(--text-3);transition:transform .18s">▼</span>
          </div>
        </div>

        <!-- Collapsed Tray -->
        <div class="att-files-tray" id="attached-files-tray" style="display:none">
          ${attachedFiles.map(f => `
            <div class="file-item" style="border-radius:0;border-top:1px solid var(--border);border-left:none;border-right:none;border-bottom:none">
              <div class="file-icon">${f.icon}</div>
              <div style="flex:1;min-width:0">
                <div class="file-name">${escapeHtml(f.name)}</div>
                <div class="file-sub">${escapeHtml(f.sub)}</div>
              </div>
              <button class="btn btn-ghost btn-xs" onclick="window.open('#')">${f.action}</button>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <div class="divider"></div>
    <div style="padding:16px 20px">
      <div class="section-label" style="margin-bottom:8px">Note from ${escapeHtml(activeVer.submitter)}</div>
      <div class="submitter-note">${escapeHtml(activeVer.note)}</div>
    </div>
  `;

  // 5. Update decision buttons wording for active version
  const btnApprove = document.querySelector('#rev-decision-actions button.btn-success');
  if (btnApprove) btnApprove.innerHTML = `&#10003; &nbsp;Approve ${activeVer.verTag}`;
  const btnChanges = document.querySelector('#rev-decision-actions button.btn-danger-ghost');
  if (btnChanges) btnChanges.innerHTML = `↺ &nbsp;Request Changes on ${activeVer.verTag}`;
}

function toggleShareForm() {
  const f = document.getElementById('share-form-wrap') || document.getElementById('share-form-inline');
  if (f) {
    f.style.display = f.style.display === 'none' ? '' : 'none';
    if (f.style.display !== 'none' && curActiveVersionId) {
      const activeVer = REVIEW_VERSIONS_DATA.find(v => v.id === curActiveVersionId);
      if (activeVer) {
        const mod = MODULES_DATA[activeVer.moduleId];
        const batch = mod && (mod.batches || []).find(b => b.id === activeVer.batchId);
        if (batch) {
          const nameEl = document.getElementById('share-batch-name');
          if (nameEl) nameEl.value = batch.num;
          const listEl = document.getElementById('share-batch-units-list');
          if (listEl) {
            listEl.innerHTML = '';
            const units = mod.availableUnits || ['Unit 1', 'Unit 2', 'Unit 3'];
            units.forEach((u, i) => {
              const lbl = document.createElement('label');
              lbl.style.display = 'flex'; lbl.style.alignItems = 'center'; lbl.style.gap = '8px';
              lbl.style.fontSize = '12.5px'; lbl.style.color = 'var(--text-2)';
              lbl.style.cursor = 'pointer'; lbl.style.padding = '3px 0';
              const chk = document.createElement('input');
              chk.type = 'checkbox';
              chk.className = 'share-unit-chk';
              chk.value = u;
              chk.style.width = '15px';
              chk.style.height = '15px';
              chk.style.accentColor = 'var(--accent)';
              chk.style.cursor = 'pointer';
              chk.style.marginBottom = '0';
              if (batch.units.includes(chk.value)) chk.checked = false;
              lbl.appendChild(chk);
              const span = document.createElement('span');
              span.textContent = chk.value;
              lbl.appendChild(span);
              listEl.appendChild(lbl);
            });
          }
        }
      }
    }
  }
}

function submitShareForm() {
  const urlEl = document.getElementById('share-url-input');
  const labelEl = document.getElementById('share-label-input');
  const noteEl = document.getElementById('share-note-input');
  const filesEl = document.getElementById('share-files-input');
  const praEl = document.getElementById('share-pra-select');

  const url = urlEl ? urlEl.value.trim() : '';
  const label = labelEl ? labelEl.value.trim() : '';
  const note = noteEl ? noteEl.value.trim() : '';
  const fileLinks = filesEl ? filesEl.value.split('\n').map(l => l.trim()).filter(Boolean) : [];
  const praRecipient = praEl ? praEl.value : '';

  const nameEl = document.getElementById('share-batch-name');
  const unitsSelected = Array.from(document.querySelectorAll('.share-unit-chk:checked')).map(c => c.value);
  const newBatchName = nameEl ? nameEl.value.trim() : '';

  if (!newBatchName) { alert('Please enter a batch name.'); return; }
  if (unitsSelected.length === 0) { alert('Please select at least one unit to include in this batch.'); return; }
  if (!url) { alert('Please provide a Google Drive Link.'); return; }
  if (curRole === 'Editor' && !praRecipient) { alert('Please select a PRA to review this version.'); return; }

  const nextNum = REVIEW_VERSIONS_DATA.length + 1;
  const nextTag = 'V' + nextNum;
  const newVerId = 'v' + nextNum;
  const authorName = `${ROLES[curRole]?.name || 'Ankit Verma'}`;

  const activeVer = REVIEW_VERSIONS_DATA.find(v => v.id === curActiveVersionId);
  const modId = activeVer ? activeVer.moduleId : 'm3';
  const batchId = activeVer ? activeVer.batchId : 'batch-m3-1';

  const todayStr = new Date().toISOString().split('T')[0];
  const newVersion = {
    id: newVerId,
    verTag: nextTag,
    submitter: authorName,
    role: curRole,
    time: formatCurrentTime(),
    submittedDate: todayStr,
    status: 'Awaiting Review',
    statusPill: 'p-warning',
    statusColor: 'var(--warning)',
    moduleId: modId,
    batchId: batchId,
    reviewRecipient: curRole === 'Editor' ? praRecipient : 'Manager',
    driveName: label || `QM101 - M3, L4 - Probability Distributions - ${nextTag}`,
    driveUrl: url,
    note: note || `Submitted ${nextTag} deliverable package for review with updated assets.`,
    attachedFiles: fileLinks
  };

  REVIEW_VERSIONS_DATA.unshift(newVersion); // Newest at top of queue
  curActiveVersionId = newVerId;

  // Add Changelog Item
  if (typeof addChangelogItem === 'function') {
    addChangelogItem({
      dotIcon: '📤',
      dotBg: 'rgba(109,108,240,0.15)',
      dotCol: '#6d6cf0',
      action: `${nextTag} Review Submitted`,
      ts: 'Just now',
      author: `${authorName} (${curRole})`,
      desc: `<b>New Version Shared:</b> ${newVersion.driveName}. Submitter Note: "${escapeHtml(newVersion.note)}"`
    });
  }

  // Force module status back to WIP
  const modHeader = document.getElementById('mod-header-' + modId);
  if (modHeader) {
    const pill = modHeader.querySelector('.pill');
    if (pill) {
      pill.className = 'pill p-editing';
      pill.textContent = 'WIP';
    }
  }

  // Force batch status to Pending
  const treeItem = document.getElementById('tree-' + modId + '-' + batchId);
  if (treeItem) {
    const batchModule = MODULES_DATA[modId];
    const batch = batchModule && (batchModule.batches || []).find(item => item.id === batchId);
    if (batch) {
      batch.num = newBatchName;
      batch.units = unitsSelected;
      treeItem.innerHTML = '<span class="pill p-warning" style="font-size:10px">Pending</span> ' + batch.num + ' · ' + (batch.units.length === 1 ? batch.units[0].split(' - ')[0] : batch.units.length + ' units');
    }
  }

  // Clear inputs
  if (urlEl) urlEl.value = '';
  if (labelEl) labelEl.value = '';
  if (noteEl) noteEl.value = '';
  if (filesEl) filesEl.value = '';
  if (praEl) praEl.value = '';

  toggleShareForm();
  renderReviewVersions();
  showToast(`<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M8 1s4 1 4 7c0 2-1 4-4 6C5 12 4 10 4 8c0-6 4-7 4-7z"/><circle cx="8" cy="8" r="1.5" fill="currentColor" stroke="none"/><path d="M5 12l-3 3M11 12l3 3"/></svg> ${nextTag} submitted for review! Manager notified.`, 'success');
}
function closeModal() { document.getElementById('modal-back').classList.remove('open'); }
function closeModalOut(e) { if (e.target === document.getElementById('modal-back')) closeModal(); }

function createProject() {
  const name = document.getElementById('new-name').value.trim();
  if (!name) { document.getElementById('new-name').focus(); return; }
  const startDate = document.getElementById('new-start-date') ? document.getElementById('new-start-date').value : '';

  closeModal();
  let msg = '<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="8" cy="8" r="6.5"/><path d="M5 8l2.5 2.5L11 6"/></svg>  "' + escapeHtml(name) + '" created.';
  if (startDate) msg += ` Scheduled to start on ${startDate}.`;
  showToast(msg);

  document.getElementById('new-name').value = '';
  if (document.getElementById('new-start-date')) document.getElementById('new-start-date').value = '';
}

function markAllRead() {
  const unreadItems = document.querySelectorAll('#screen-notifications .notif-item.unread');
  if (unreadItems.length === 0) return;

  unreadItems.forEach(item => {
    item.classList.remove('unread');
  });

  const countText = document.getElementById('notif-count-text');
  if (countText) countText.textContent = '0 unread';

  // Also update the sidebar badge if it exists
  const sidebarBadge = document.querySelector('.nav-count');
  if (sidebarBadge) sidebarBadge.style.display = 'none';

  const topbarDot = document.querySelector('.tb-dot');
  if (topbarDot) topbarDot.style.display = 'none';

  showToast('<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="8" cy="8" r="6.5"/><path d="M5 8l2.5 2.5L11 6"/></svg> All notifications marked as read', 'success');
}

function showToast(msg, type) {
  const t = document.createElement('div');
  let bg = 'var(--success)';
  if (type === 'danger') bg = 'var(--danger)';
  else if (type === 'warning') bg = 'var(--warning)';
  else if (type === 'info') bg = 'var(--text-2)';
  else if (type === 'accent') bg = 'var(--accent)';
  t.style.cssText = `position:fixed;bottom:90px;right:24px;background:${bg};color:#fff;padding:10px 16px;border-radius:10px;font-size:12.5px;font-weight:600;z-index:400;box-shadow:var(--shadow-lg);animation:slide-up .25s ease;display:flex;align-items:center;gap:8px;max-width:320px`;
  t.innerHTML = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 3000);
}


/* =============================================
   REVIEW DECISIONS & CHANGELOG
   ============================================= */

let changelogEventsCount = 3;

function openReqChangesModal() {
  document.getElementById('modal-request-changes').classList.add('open');
  setTimeout(() => {
    const el = document.getElementById('req-changes-desc');
    if (el) el.focus();
  }, 80);
}

function closeReqChangesModal() {
  document.getElementById('modal-request-changes').classList.remove('open');
}

function closeReqChangesModalOut(e) {
  if (e.target === document.getElementById('modal-request-changes')) {
    closeReqChangesModal();
  }
}

function openApproveModal() {
  document.getElementById('modal-approve').classList.add('open');
  setTimeout(() => {
    const el = document.getElementById('approve-notes');
    if (el) el.focus();
  }, 80);
}

function closeApproveModal() {
  document.getElementById('modal-approve').classList.remove('open');
}

function closeApproveModalOut(e) {
  if (e.target === document.getElementById('modal-approve')) {
    closeApproveModal();
  }
}

function submitRequestChanges() {
  const descEl = document.getElementById('req-changes-desc');
  const desc = descEl ? descEl.value.trim() : '';
  if (!desc) {
    alert('Please specify the required changes before submitting.');
    if (descEl) descEl.focus();
    return;
  }

  // Gather categories
  const cats = [];
  document.querySelectorAll('input[name="req-cat"]:checked').forEach(c => cats.push(c.value));
  const catHtml = cats.length > 0
    ? `<div style="margin-top:5px;display:flex;flex-wrap:wrap;gap:4px">${cats.map(t => `<span class="pill" style="font-size:9.5px;background:var(--danger-bg);color:var(--danger);border:1px solid rgba(220,38,38,0.25)">${t}</span>`).join('')}</div>`
    : '';

  const dueVal = document.getElementById('req-changes-due')?.value;
  const dueHtml = dueVal
    ? `<div style="font-size:11px;color:var(--danger);margin-top:5px;font-weight:600">Target V2 Date: ${dueVal}</div>`
    : '';

  // Update active version state
  const activeVer = REVIEW_VERSIONS_DATA.find(v => v.id === curActiveVersionId);
  if (activeVer) {
    activeVer.status = 'Changes Requested';
    activeVer.statusPill = 'p-danger';
    activeVer.statusColor = 'var(--danger)';
  }

  // 1. Add Changelog Item
  addChangelogItem({
    dotIcon: '↺',
    dotBg: 'rgba(220,38,38,0.15)',
    dotCol: 'var(--danger)',
    action: 'Changes Requested',
    ts: 'Just now',
    author: `${ROLES[curRole]?.name || 'Malhar'} (${curRole})`,
    desc: `<div style="color:var(--text);margin-bottom:2px"><b>Required:</b> ${escapeHtml(desc)}</div>${catHtml}${dueHtml}`
  });

  renderReviewVersions();

  // 4. Update Reviewer row for Manager
  const pmStatus = document.getElementById('rev-status-pm');
  if (pmStatus) {
    pmStatus.className = 'pill p-danger';
    pmStatus.textContent = 'Changes Req.';
  }

  // 5. Update Decision box in Manager Panel
  const actionsEl = document.getElementById('rev-decision-actions');
  const resultEl = document.getElementById('rev-decision-result');
  if (actionsEl) actionsEl.style.display = 'none';
  if (resultEl) {
    resultEl.style.display = 'block';
    resultEl.innerHTML = `
      <div style="background:var(--danger-bg);border:1px solid rgba(220,38,38,0.22);border-radius:8px;padding:12px;font-size:12px;color:var(--text-2)">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:5px">
          <span style="font-weight:700;color:var(--danger);display:flex;align-items:center;gap:5px">↺ Changes Requested</span>
          <span style="font-size:10px;color:var(--text-3)">Just now</span>
        </div>
        <div style="font-size:11.5px;color:var(--text-2);margin-bottom:10px;line-height:1.4">Instructions sent to Editor/PRA for revision. Waiting for revision submission.</div>
        <button class="btn btn-ghost btn-xs" style="width:100%;justify-content:center" onclick="resetDecision()">Reset Decision</button>
      </div>
    `;
  }

  // 6. Update Sidebar Pills
  if (activeVer) {
    const treeItem = document.getElementById('tree-' + activeVer.moduleId + '-' + activeVer.batchId);
    if (treeItem) {
      const batchModule = MODULES_DATA[activeVer.moduleId];
      const batch = batchModule && (batchModule.batches || []).find(item => item.id === activeVer.batchId);
      if (batch) {
        treeItem.innerHTML = '↺ <span class="pill p-danger" style="font-size:10px">Changes Req.</span> ' + batch.num + ' · ' + (batch.units.length === 1 ? batch.units[0].split(' - ')[0] : batch.units.length + ' units');
      }
    }
  }

  // Reset form inputs
  if (descEl) descEl.value = '';
  document.querySelectorAll('input[name="req-cat"]').forEach(c => c.checked = false);

  // Archive this version to history
  if (activeVer) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const now = new Date();
    REVIEW_HISTORY.unshift({
      verTag: activeVer.verTag,
      lesson: 'QM101 - M3, L4 - Probability Distributions',
      submitter: activeVer.submitter,
      submittedDate: activeVer.submittedDate || now.toISOString().split('T')[0],
      reviewedDate: now.toISOString().split('T')[0],
      outcome: 'Changes Requested',
      outcomeClass: 'p-danger',
      outcomeIcon: '↺',
      reviewedBy: `${ROLES[curRole]?.name || 'Malhar'} (${curRole})`,
      note: descEl ? descEl.value.trim() : 'Changes requested by manager.',
      driveName: activeVer.driveName
    });
  }

  closeReqChangesModal();
  showToast(`↺ Changes requested on ${activeVer ? activeVer.verTag : 'Version'}`, 'danger');
}

function submitApprove() {
  const noteEl = document.getElementById('approve-notes');
  const note = noteEl ? noteEl.value.trim() : '';

  // Update active version state
  const activeVer = REVIEW_VERSIONS_DATA.find(v => v.id === curActiveVersionId);
  if (activeVer) {
    activeVer.status = 'Approved &#10003;';
    activeVer.statusPill = 'p-complete';
    activeVer.statusColor = 'var(--success)';
    const batchModule = MODULES_DATA[activeVer.moduleId];
    const batch = batchModule && (batchModule.batches || []).find(item => item.id === activeVer.batchId);
    if (batch) {
      batch.status = 'Request Approved';
      batch.statusPill = 'p-complete';
      batch.reviewComment = note || 'Manager approved this review request.';
      batch.approvalNotice = 'Request approved. Please update the project timeline accordingly.';
      const treeItem = document.getElementById('tree-' + activeVer.moduleId + '-' + activeVer.batchId);
      if (treeItem) treeItem.innerHTML = '&#10003; <span class="pill p-complete" style="font-size:10px">Reviewed</span> ' + batch.num + ' · ' + (batch.units.length === 1 ? batch.units[0].split(' - ')[0] : batch.units.length + ' units');
    }
  }

  // 1. Add Changelog Item
  addChangelogItem({
    dotIcon: '&#10003;',
    dotBg: 'rgba(22,163,74,0.15)',
    dotCol: 'var(--success)',
    action: `${activeVer ? activeVer.verTag : 'V1'} Approved`,
    ts: 'Just now',
    author: `${ROLES[curRole]?.name || 'Malhar'} (${curRole})`,
    desc: note
      ? `<b>Signed off with comment:</b> "${escapeHtml(note)}"`
      : '<b>Signed off:</b> Approved without additional comments. Ready for LMS staging.'
  });

  renderReviewVersions();

  // 4. Update Reviewer row for Manager
  const pmStatus = document.getElementById('rev-status-pm');
  if (pmStatus) {
    pmStatus.className = 'pill p-complete';
    pmStatus.textContent = 'Approved &#10003;';
  }

  // 5. Update Decision box in Manager Panel
  const actionsEl = document.getElementById('rev-decision-actions');
  const resultEl = document.getElementById('rev-decision-result');
  if (actionsEl) actionsEl.style.display = 'none';
  if (resultEl) {
    resultEl.style.display = 'block';
    resultEl.innerHTML = `
      <div style="background:var(--success-bg);border:1px solid rgba(22,163,74,0.25);border-radius:8px;padding:12px;font-size:12px;color:var(--text-2)">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:5px">
          <span style="font-weight:700;color:var(--success);display:flex;align-items:center;gap:5px">&#10003; ${activeVer ? activeVer.verTag : 'V1'} Approved</span>
          <span style="font-size:10px;color:var(--text-3)">Just now</span>
        </div>
        ${note ? `<div style="font-size:11.5px;color:var(--text-2);margin-bottom:10px;font-style:italic">"${escapeHtml(note)}"</div>` : '<div style="font-size:11.5px;color:var(--text-2);margin-bottom:10px;line-height:1.4">Sign-off recorded. Deliverable package approved for LMS staging.</div>'}
        <button class="btn btn-ghost btn-xs" style="width:100%;justify-content:center" onclick="resetDecision()">Reset Decision</button>
      </div>
    `;
  }

  // Reset form inputs
  if (noteEl) noteEl.value = '';

  // Archive this version to history
  if (activeVer) {
    REVIEW_HISTORY.unshift({
      verTag: activeVer.verTag,
      lesson: 'QM101 - M3, L4 - Probability Distributions',
      submitter: activeVer.submitter,
      submittedDate: activeVer.submittedDate || new Date().toISOString().split('T')[0],
      reviewedDate: new Date().toISOString().split('T')[0],
      outcome: 'Approved',
      outcomeClass: 'p-complete',
      outcomeIcon: '&#10003;',
      reviewedBy: `${ROLES[curRole]?.name || 'Malhar'} (${curRole})`,
      note: note || 'Approved without additional comments.',
      driveName: activeVer.driveName
    });
  }

  closeApproveModal();
  showToast(`<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="8" cy="8" r="6.5"/><path d="M5 8l2.5 2.5L11 6"/></svg> ${activeVer ? activeVer.verTag : 'Version'} Approved successfully`, 'success');
}

function resetDecision() {
  const actionsEl = document.getElementById('rev-decision-actions');
  const resultEl = document.getElementById('rev-decision-result');
  if (actionsEl) actionsEl.style.display = 'flex';
  if (resultEl) {
    resultEl.style.display = 'none';
    resultEl.innerHTML = '';
  }

  const mainPill = document.getElementById('rev-main-status-pill');
  if (mainPill) {
    mainPill.className = 'pill p-review';
    mainPill.textContent = 'Awaiting Review';
  }

  const v1Status = document.getElementById('rev-v1-status-text');
  if (v1Status) {
    v1Status.style.color = 'var(--warning)';
    v1Status.textContent = 'Awaiting review';
  }

  const pmStatus = document.getElementById('rev-status-pm');
  if (pmStatus) {
    pmStatus.className = 'pill p-warning';
    pmStatus.textContent = 'Pending';
  }

  addChangelogItem({
    dotIcon: '↩️',
    dotBg: 'var(--surface-2)',
    dotCol: 'var(--text-3)',
    action: 'Decision Reset',
    ts: 'Just now',
    author: `${ROLES[curRole]?.name || 'Malhar'} (${curRole})`,
    desc: 'Review decision reset back to Awaiting Review.'
  });

  showToast('Decision reset to Awaiting Review', 'accent');
}


/* =============================================
   REVIEW HISTORY MODAL
   ============================================= */

function openReviewHistory() {
  renderReviewHistory();
  document.getElementById('modal-review-history').classList.add('open');
}

function closeReviewHistory() {
  document.getElementById('modal-review-history').classList.remove('open');
}

function closeReviewHistoryOut(e) {
  if (e.target === document.getElementById('modal-review-history')) closeReviewHistory();
}

function renderReviewHistory() {
  const container = document.getElementById('review-history-list');
  if (!container) return;

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const fmtDate = (str) => {
    if (!str) return '-';
    const d = new Date(str);
    return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
  };

  // Stats
  const approved = REVIEW_HISTORY.filter(h => h.outcome === 'Approved').length;
  const expired = REVIEW_HISTORY.filter(h => h.outcome === 'Expired').length;
  const changesReq = REVIEW_HISTORY.filter(h => h.outcome === 'Changes Requested').length;
  const total = REVIEW_HISTORY.length;

  // Update stat badges
  const statsEl = document.getElementById('rh-stats');
  if (statsEl) {
    statsEl.innerHTML = `
      <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:14px">
        <div style="display:flex;align-items:center;gap:6px;padding:6px 12px;border-radius:8px;background:var(--success-bg);border:1px solid rgba(22,163,74,0.2)">
          <span style="font-weight:700;color:var(--success);font-size:18px">${approved}</span>
          <span style="font-size:11.5px;color:var(--text-2)">Approved</span>
        </div>
        <div style="display:flex;align-items:center;gap:6px;padding:6px 12px;border-radius:8px;background:rgba(220,38,38,0.07);border:1px solid rgba(220,38,38,0.18)">
          <span style="font-weight:700;color:var(--danger);font-size:18px">${expired}</span>
          <span style="font-size:11.5px;color:var(--text-2)">Expired / Missed</span>
        </div>
        <div style="display:flex;align-items:center;gap:6px;padding:6px 12px;border-radius:8px;background:rgba(109,108,240,0.07);border:1px solid rgba(109,108,240,0.18)">
          <span style="font-weight:700;color:var(--accent);font-size:18px">${changesReq}</span>
          <span style="font-size:11.5px;color:var(--text-2)">Changes Requested</span>
        </div>
        <div style="display:flex;align-items:center;gap:6px;padding:6px 12px;border-radius:8px;background:var(--surface-2);border:1px solid var(--border-2)">
          <span style="font-weight:700;color:var(--text);font-size:18px">${total}</span>
          <span style="font-size:11.5px;color:var(--text-2)">Total Reviews</span>
        </div>
      </div>
    `;
  }

  if (REVIEW_HISTORY.length === 0) {
    container.innerHTML = `<div style="text-align:center;padding:40px 20px;color:var(--text-3);font-size:13px">
      <div style="font-size:32px;margin-bottom:10px">📭</div>
      No review history yet. Reviews will appear here once completed or expired.
    </div>`;
    return;
  }

  container.innerHTML = REVIEW_HISTORY.map(h => {
    const isExpired = h.outcome === 'Expired';
    const isApproved = h.outcome === 'Approved';
    const bgColor = isApproved ? 'var(--success-bg)' : isExpired ? 'rgba(220,38,38,0.05)' : 'rgba(109,108,240,0.05)';
    const borderColor = isApproved ? 'rgba(22,163,74,0.2)' : isExpired ? 'rgba(220,38,38,0.2)' : 'rgba(109,108,240,0.2)';
    return `
      <div style="border:1px solid ${borderColor};background:${bgColor};border-radius:10px;padding:14px 16px;margin-bottom:10px">
        <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:12px;margin-bottom:8px">
          <div>
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:3px">
              <span style="font-size:13px;font-weight:700;color:var(--text)">${h.verTag}</span>
              <span class="pill ${h.outcomeClass}" style="font-size:10px">${h.outcomeIcon} ${h.outcome}</span>
            </div>
            <div style="font-size:12px;color:var(--text-2);font-weight:500">${h.lesson}</div>
            <div style="font-size:11px;color:var(--text-3);margin-top:2px"><svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M1 4a1 1 0 011-1h4l2 2h6a1 1 0 011 1v7a1 1 0 01-1 1H2a1 1 0 01-1-1V4z"/></svg> ${escapeHtml(h.driveName)}</div>
          </div>
          <div style="text-align:right;flex-shrink:0">
            <div style="font-size:10.5px;color:var(--text-3)">Submitted</div>
            <div style="font-size:11.5px;color:var(--text-2);font-weight:600">${fmtDate(h.submittedDate)}</div>
            ${h.reviewedDate ? `<div style="font-size:10px;color:var(--text-3);margin-top:2px">Reviewed ${fmtDate(h.reviewedDate)}</div>` : `<div style="font-size:10px;color:var(--danger);margin-top:2px">⏰ Not reviewed</div>`}
          </div>
        </div>
        <div style="display:flex;align-items:center;gap:10px;padding-top:8px;border-top:1px solid var(--border);font-size:11.5px;color:var(--text-2)">
          <span>👤 By <b>${escapeHtml(h.submitter)}</b></span>
          <span style="color:var(--border-2)">|</span>
          <span>Reviewed by: <b>${escapeHtml(h.reviewedBy)}</b></span>
          ${h.note ? `<span style="color:var(--border-2)">|</span><span style="color:var(--text-3);font-style:italic;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:200px" title="${escapeHtml(h.note)}">"${escapeHtml(h.note.substring(0, 60))}${h.note.length > 60 ? '…' : ''}"</span>` : ''}
        </div>
      </div>
    `;
  }).join('');
}

function filterReviewHistory(filter, btn) {
  // Update active button
  document.querySelectorAll('.rh-filter-btn').forEach(b => {
    b.classList.remove('active', 'btn-primary');
    b.classList.add('btn-ghost');
  });
  btn.classList.add('active', 'btn-primary');
  btn.classList.remove('btn-ghost');

  const container = document.getElementById('review-history-list');
  if (!container) return;

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const fmtDate = (str) => {
    if (!str) return '-';
    const d = new Date(str);
    return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
  };

  const filtered = filter === 'all' ? REVIEW_HISTORY : REVIEW_HISTORY.filter(h => h.outcome === filter);

  if (filtered.length === 0) {
    container.innerHTML = `<div style="text-align:center;padding:30px;color:var(--text-3);font-size:13px">No "${filter}" reviews in history.</div>`;
    return;
  }

  container.innerHTML = filtered.map(h => {
    const isExpired = h.outcome === 'Expired';
    const isApproved = h.outcome === 'Approved';
    const bgColor = isApproved ? 'var(--success-bg)' : isExpired ? 'rgba(220,38,38,0.05)' : 'rgba(109,108,240,0.05)';
    const borderColor = isApproved ? 'rgba(22,163,74,0.2)' : isExpired ? 'rgba(220,38,38,0.2)' : 'rgba(109,108,240,0.2)';
    return `
      <div style="border:1px solid ${borderColor};background:${bgColor};border-radius:10px;padding:14px 16px;margin-bottom:10px">
        <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:12px;margin-bottom:8px">
          <div>
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:3px">
              <span style="font-size:13px;font-weight:700;color:var(--text)">${h.verTag}</span>
              <span class="pill ${h.outcomeClass}" style="font-size:10px">${h.outcomeIcon} ${h.outcome}</span>
            </div>
            <div style="font-size:12px;color:var(--text-2);font-weight:500">${h.lesson}</div>
            <div style="font-size:11px;color:var(--text-3);margin-top:2px"><svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M1 4a1 1 0 011-1h4l2 2h6a1 1 0 011 1v7a1 1 0 01-1 1H2a1 1 0 01-1-1V4z"/></svg> ${escapeHtml(h.driveName)}</div>
          </div>
          <div style="text-align:right;flex-shrink:0">
            <div style="font-size:10.5px;color:var(--text-3)">Submitted</div>
            <div style="font-size:11.5px;color:var(--text-2);font-weight:600">${fmtDate(h.submittedDate)}</div>
            ${h.reviewedDate ? `<div style="font-size:10px;color:var(--text-3);margin-top:2px">Reviewed ${fmtDate(h.reviewedDate)}</div>` : `<div style="font-size:10px;color:var(--danger);margin-top:2px">⏰ Not reviewed</div>`}
          </div>
        </div>
        <div style="display:flex;align-items:center;gap:10px;padding-top:8px;border-top:1px solid var(--border);font-size:11.5px;color:var(--text-2);flex-wrap:wrap">
          <span>👤 By <b>${escapeHtml(h.submitter)}</b></span>
          <span style="color:var(--border-2)">|</span>
          <span>Reviewed by: <b>${escapeHtml(h.reviewedBy)}</b></span>
          ${h.note ? `<span style="color:var(--border-2)">|</span><span style="color:var(--text-3);font-style:italic">"${escapeHtml(h.note.substring(0, 80))}${h.note.length > 80 ? '…' : ''}"</span>` : ''}
        </div>
      </div>
    `;
  }).join('');
}

function toggleReviewActivityPanel() {
  const feed = document.getElementById('revChangelogFeed');
  const banner = document.getElementById('rev-activity-collapsed-banner');
  const txt = document.getElementById('activity-toggle-txt');
  const countBadge = document.getElementById('changelog-count');
  if (!feed) return;

  const isHidden = feed.style.display === 'none';
  if (isHidden) {
    feed.style.display = 'block';
    if (banner) banner.style.display = 'none';
    if (txt) txt.textContent = 'Hide Activity';
  } else {
    feed.style.display = 'none';
    if (banner) {
      banner.style.display = 'block';
      const currentCount = countBadge ? countBadge.textContent : '3 events';
      const collapsedBadge = document.getElementById('rev-activity-collapsed-count');
      if (collapsedBadge) collapsedBadge.textContent = currentCount;
    }
    if (txt) txt.textContent = 'Show Activity';
  }
}

function addChangelogItem(item) {
  const feed = document.getElementById('revChangelogFeed');
  if (!feed) return;
  changelogEventsCount++;
  const countBadge = document.getElementById('changelog-count');
  if (countBadge) countBadge.textContent = `${changelogEventsCount} events`;
  const collapsedBadge = document.getElementById('rev-activity-collapsed-count');
  if (collapsedBadge) collapsedBadge.textContent = `${changelogEventsCount} events`;

  const itemDiv = document.createElement('div');
  itemDiv.className = 'changelog-item';
  itemDiv.innerHTML = `
    <div class="cli-dot" style="background:${item.dotBg};color:${item.dotCol}">${item.dotIcon}</div>
    <div class="cli-body">
      <div class="cli-head">
        <span class="cli-action">${item.action}</span>
        <span class="cli-ts">${item.ts}</span>
      </div>
      <div class="cli-author">${item.author}</div>
      <div class="cli-desc">${item.desc}</div>
    </div>
  `;
  feed.insertBefore(itemDiv, feed.firstChild);
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}


/* =============================================
   BATCH SYSTEM
   ============================================= */


function openAddBatchModal(modId) {
  const mod = MODULES_DATA[modId];
  if (!mod) return;
  document.getElementById('add-batch-mod-id').value = modId;
  document.getElementById('add-batch-mod-label').textContent = mod.title + ' - Select units included in this batch';
  document.getElementById('add-batch-name').value = 'Batch ' + ((mod.batches || []).length + 1);
  document.getElementById('add-batch-drive').value = '';
  document.getElementById('add-batch-label').value = 'V1';
  document.getElementById('add-batch-notes').value = '';
  document.getElementById('add-batch-files').value = '';
  const isEditor = curRole === 'Editor';
  document.getElementById('add-batch-pra-row').style.display = isEditor ? 'block' : 'none';
  document.getElementById('add-batch-pra').value = '';
  document.getElementById('add-batch-units-req').style.display = isEditor ? 'none' : '';
  document.getElementById('add-batch-units-hint').textContent = isEditor
    ? ' — Optional for Editors'
    : ' — Select all that apply (mandatory)';

  // Populate units checkboxes
  const unitsList = document.getElementById('add-batch-units-list');
  const units = mod.availableUnits || ['Unit 1', 'Unit 2', 'Unit 3'];
  unitsList.innerHTML = units.map((u, i) => `
            <label style="display:flex;align-items:center;gap:8px;cursor:pointer;font-size:12.5px;padding:3px 0">
              <input type="checkbox" class="batch-unit-chk" value="${u}"
                style="width:15px;height:15px;accent-color:var(--accent);cursor:pointer"
                id="unit-chk-${i}">
              <span>${u}</span>
            </label>
          `).join('');

  document.getElementById('modal-add-batch').classList.add('open');
  setTimeout(() => document.getElementById('add-batch-name').focus(), 80);
}

function closeAddBatchModal() {
  document.getElementById('modal-add-batch').classList.remove('open');
}

function closeAddBatchModalOut(e) {
  if (e.target === document.getElementById('modal-add-batch')) closeAddBatchModal();
}

function submitAddBatch() {
  const modId = document.getElementById('add-batch-mod-id').value;
  const mod = MODULES_DATA[modId];
  if (!mod) return;

  const name = document.getElementById('add-batch-name').value.trim();
  const driveLink = document.getElementById('add-batch-drive').value.trim();
  const label = document.getElementById('add-batch-label').value.trim();
  const notes = document.getElementById('add-batch-notes').value.trim();
  const fileLinks = document.getElementById('add-batch-files').value.split('\n').map(link => link.trim()).filter(Boolean);
  const praRecipient = document.getElementById('add-batch-pra').value;
  const reviewStatus = curRole === 'Editor' ? 'Awaiting PRA Review' : 'Awaiting Review';

  // Get selected units
  const selectedUnits = Array.from(document.querySelectorAll('.batch-unit-chk:checked')).map(c => c.value);

  if (!name) { alert('Please enter a batch name.'); document.getElementById('add-batch-name').focus(); return; }
  if (curRole !== 'Editor' && selectedUnits.length === 0) { alert('Please select at least one unit to include in this batch.'); return; }
  if (curRole === 'Editor' && !praRecipient) { alert('Please select the PRA who should receive this review request.'); document.getElementById('add-batch-pra').focus(); return; }
  if (!driveLink) { alert('Please provide the Google Drive link for this batch.'); document.getElementById('add-batch-drive').focus(); return; }

  const batchId = 'batch-' + modId + '-' + Date.now();
  const batch = {
    id: batchId,
    num: name,
    units: selectedUnits,
    status: reviewStatus,
    statusPill: 'p-warning',
    submittedBy: ROLES[curRole]?.name || 'Ankit Verma',
    reviewRecipient: curRole === 'Editor' ? praRecipient : 'Manager',
    submittedDate: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
    driveName: 'QM101 - ' + mod.shortTitle + ' - ' + name + ' - ' + (label || 'V1'),
    driveUrl: driveLink,
    fileLinks,
    notes: notes,
    reviewComment: '',
    notes_thread: []
  };

  mod.batches = mod.batches || [];
  mod.batches.push(batch);

  // Add to REVIEW_VERSIONS_DATA
  REVIEW_VERSIONS_DATA.push({
    id: batchId,
    verTag: name + (label ? ' - ' + label : ''),
    submitter: batch.submittedBy,
    role: curRole,
    reviewRecipient: curRole === 'Editor' ? praRecipient : 'Manager',
    time: formatCurrentTime(),
    submittedDate: new Date().toISOString().split('T')[0],
    status: reviewStatus,
    statusPill: 'p-warning',
    statusColor: 'var(--warning)',
    moduleId: modId,
    moduleName: mod.title,
    batchId: batchId,
    batchNum: name,
    units: selectedUnits,
    driveName: batch.driveName,
    driveUrl: driveLink,
    note: notes,
    attachedFiles: fileLinks
  });

  // Add tree item
  const ch = document.getElementById('ch-' + modId);
  if (ch) {
    const emptyMsg = ch.querySelector('[style*="No batches"]');
    if (emptyMsg) emptyMsg.remove();
    const el = document.createElement('div');
    el.className = 'tree-lesson';
    el.id = 'tree-' + modId + '-' + batchId;
    const unitLabel = selectedUnits.length === 1 ? selectedUnits[0].split(' - ')[0] : selectedUnits.length + ' units';
    el.innerHTML = '<span class="pill p-warning" style="font-size:10px">Pending</span> ' + name + ' · ' + unitLabel;
    el.onclick = () => selBatch(modId, batchId);
    ch.appendChild(el);
  }

  // Force module status back to WIP since there is a new pending batch
  const modHeader = document.getElementById('mod-header-' + modId);
  if (modHeader) {
    const pill = modHeader.querySelector('.pill');
    if (pill) {
      pill.className = 'pill p-editing';
      pill.textContent = 'WIP';
    }
  }

  closeAddBatchModal();
  selBatch(modId, batchId);

  // Update Review nav count
  const navCount = document.querySelector('#nav-review .nav-count');
  if (navCount) navCount.textContent = REVIEW_VERSIONS_DATA.filter(v => v.status === 'Awaiting Review' || v.status === 'Awaiting PRA Review').length;

  showToast('📋 ' + name + ' submitted for review!', 'success');
}

function sendBatchForManagerReview(modId, batchId) {
  const mod = MODULES_DATA[modId];
  const batch = mod && (mod.batches || []).find(item => item.id === batchId);
  if (!batch || batch.status !== 'Awaiting PRA Review') return;

  batch.status = 'Awaiting Review';
  batch.statusPill = 'p-warning';
  batch.reviewRecipient = 'Manager';
  batch.forwardedBy = ROLES[curRole]?.name || 'PRA';
  batch.forwardedAt = formatCurrentTime();
  const reviewVersion = REVIEW_VERSIONS_DATA.find(version => version.batchId === batchId);
  if (reviewVersion) {
    reviewVersion.status = 'Awaiting Review';
    reviewVersion.statusPill = 'p-warning';
    reviewVersion.statusColor = 'var(--warning)';
    reviewVersion.reviewRecipient = 'Manager';
    reviewVersion.forwardedBy = batch.forwardedBy;
  }
  const treeItem = document.getElementById('tree-' + modId + '-' + batchId);
  if (treeItem) treeItem.innerHTML = '<span class="pill p-warning" style="font-size:10px">Manager Review</span> ' + batch.num + ' · ' + (batch.units.length === 1 ? batch.units[0].split(' - ')[0] : batch.units.length + ' units');
  const navCount = document.querySelector('#nav-review .nav-count');
  if (navCount) navCount.textContent = REVIEW_VERSIONS_DATA.filter(version => version.status === 'Awaiting Review' || version.status === 'Awaiting PRA Review').length;
  renderBatchDetail(mod, batch);
  showToast('Batch forwarded to the Manager for review.', 'success');
}

function openEditBatchModal(modId, batchId) {
  const mod = MODULES_DATA[modId];
  const batch = mod && (mod.batches || []).find(b => b.id === batchId);
  if (!batch) return;

  document.getElementById('edit-batch-mod-id').value = modId;
  document.getElementById('edit-batch-id').value = batchId;
  document.getElementById('edit-batch-mod-label').textContent = mod.title + ' · ' + batch.num;
  document.getElementById('edit-batch-name').value = batch.num;
  document.getElementById('edit-batch-drive').value = batch.driveUrl || '';
  document.getElementById('edit-batch-files').value = (batch.fileLinks || []).join('\n');
  document.getElementById('edit-batch-label').value = batch.label || '';
  document.getElementById('edit-batch-notes').value = batch.notes || '';
  document.getElementById('edit-batch-reason').value = '';

  const units = mod.availableUnits || batch.units || [];
  document.getElementById('edit-batch-units-list').innerHTML = units.map((unit, index) => `
            <label style="display:flex;align-items:center;gap:8px;cursor:pointer;font-size:12.5px;padding:3px 0">
              <input type="checkbox" class="edit-batch-unit-chk" value="${unit}" ${batch.units.includes(unit) ? 'checked' : ''}
                style="width:15px;height:15px;accent-color:var(--accent);cursor:pointer" id="edit-unit-chk-${index}">
              <span>${unit}</span>
            </label>`).join('');
  document.getElementById('modal-edit-batch').classList.add('open');
  setTimeout(() => document.getElementById('edit-batch-name').focus(), 80);
}

function closeEditBatchModal() {
  document.getElementById('modal-edit-batch').classList.remove('open');
}

function closeEditBatchModalOut(event) {
  if (event.target === document.getElementById('modal-edit-batch')) closeEditBatchModal();
}

function submitEditBatch() {
  const modId = document.getElementById('edit-batch-mod-id').value;
  const batchId = document.getElementById('edit-batch-id').value;
  const mod = MODULES_DATA[modId];
  const batch = mod && (mod.batches || []).find(b => b.id === batchId);
  if (!batch) return;

  const name = document.getElementById('edit-batch-name').value.trim();
  const driveUrl = document.getElementById('edit-batch-drive').value.trim();
  const label = document.getElementById('edit-batch-label').value.trim();
  const notes = document.getElementById('edit-batch-notes').value.trim();
  const reason = document.getElementById('edit-batch-reason').value.trim();
  const units = Array.from(document.querySelectorAll('.edit-batch-unit-chk:checked')).map(input => input.value);
  const fileLinks = document.getElementById('edit-batch-files').value.split('\n').map(link => link.trim()).filter(Boolean);

  if (!name) { alert('Please enter a batch name.'); return; }
  if (!driveUrl) { alert('Please provide the Google Drive link for this batch.'); return; }
  if (!units.length) { alert('Please select at least one unit.'); return; }
  if (reason.length < 10) { alert('Please enter an edit reason with at least 10 non-space characters.'); document.getElementById('edit-batch-reason').focus(); return; }

  const previousName = batch.num;
  batch.num = name;
  batch.units = units;
  batch.driveUrl = driveUrl;
  batch.fileLinks = fileLinks;
  batch.label = label;
  batch.notes = notes;
  batch.driveName = 'QM101 - ' + mod.shortTitle + ' - ' + name + ' - ' + (label || 'V1');
  batch.editHistory = batch.editHistory || [];
  batch.editHistory.unshift({ reason, by: ROLES[curRole]?.name || 'Current user', time: formatCurrentTime() });

  const reviewVersion = REVIEW_VERSIONS_DATA.find(version => version.batchId === batchId);
  if (reviewVersion) {
    Object.assign(reviewVersion, { verTag: name + (label ? ' - ' + label : ''), batchNum: name, units, driveName: batch.driveName, driveUrl, note: notes, attachedFiles: fileLinks });
  }
  const treeItem = document.getElementById('tree-' + modId + '-' + batchId);
  if (treeItem) treeItem.innerHTML = '<span class="pill ' + (batch.status === 'Completed' || batch.status === 'Reviewed' ? 'p-complete' : 'p-warning') + '" style="font-size:10px">' + batch.status + '</span> ' + name + ' · ' + (units.length === 1 ? units[0].split(' - ')[0] : units.length + ' units');

  closeEditBatchModal();
  renderBatchDetail(mod, batch);
  showToast('Batch updated and edit reason recorded.', 'success');
}

function selBatch(modId, batchId) {
  const mod = MODULES_DATA[modId];
  if (!mod) return;
  const batch = (mod.batches || []).find(b => b.id === batchId);
  if (!batch) return;

  // Highlight in tree
  document.querySelectorAll('.tree-mod, .tree-lesson, .tree-wi').forEach(el => el.classList.remove('selected'));
  const el = document.getElementById('tree-' + modId + '-' + batchId);
  if (el) el.classList.add('selected');

  // Open tree
  const ch = document.getElementById('ch-' + modId);
  const cv = document.getElementById('chev-' + modId);
  if (ch && !ch.classList.contains('open')) { ch.classList.add('open'); if (cv) cv.classList.add('open'); }

  renderBatchDetail(mod, batch);
}

function renderBatchDetail(mod, batch) {
  const detail = document.getElementById('work-detail');
  detail.classList.add('show');
  document.getElementById('work-empty').style.display = 'none';

  const statusPills = { 'Approved': 'p-complete', 'Request Approved': 'p-complete', 'Completed': 'p-complete', 'Reviewed': 'p-complete', 'Changes Requested': 'p-review', 'Awaiting Review': 'p-warning', 'Awaiting PRA Review': 'p-warning', 'In Progress': 'p-editing', 'Expired': 'p-danger' };
  const pill = statusPills[batch.status] || 'p-none';

  detail.innerHTML = `
  <div class="wi-header">
    <button class="back-mod-btn" onclick="selMod('${mod.id}')">← Back to ${mod.shortTitle} Overview</button>
    <div class="wi-bc">QM101 · ${mod.num} · ${batch.num}</div>
    <div class="wi-title">${batch.driveName}</div>
    <div class="wi-facts">
      <div class="wi-fact">
        <label>Status</label>
        <div class="val"><span class="pill ${pill}">${batch.status}</span></div>
      </div>
      <div class="wi-fact">
        <label>Submitted by</label>
        <div class="val">${batch.submittedBy}</div>
      </div>
      <div class="wi-fact">
        <label>Date</label>
        <div class="val">${batch.submittedDate}</div>
      </div>
    </div>
  </div>

  <div class="wi-body">
    <div class="wi-section">Units Included in this Batch</div>
    <div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:6px;margin-bottom:16px">
      ${batch.units.map(u => '<span class="batch-units-tag" style="font-size:12px">' + u + '</span>').join('')}
    </div>

    <div class="wi-section" style="margin-top:16px">Drive / Deliverables</div>
    ${batch.driveUrl ? `
    <div class="ver-item" style="margin-top:8px;cursor:pointer" onclick="window.open('https://' + '${batch.driveUrl}'.replace(/^https?:\/\//, ''), '_blank')">
      <div style="width:32px;height:32px;background:var(--surface-2);border:1px solid var(--border);border-radius:8px;display:flex;align-items:center;justify-content:center;flex-shrink:0">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M1 4a1 1 0 011-1h4l2 2h6a1 1 0 011 1v7a1 1 0 01-1 1H2a1 1 0 01-1-1V4z"/></svg>
      </div>
      <div style="flex:1;min-width:0">
        <div class="ver-by">${batch.driveName}</div>
        <div class="ver-date">${batch.driveUrl}</div>
      </div>
      <span class="pill ${pill}" style="font-size:10px">${batch.status}</span>
      <button class="btn btn-primary btn-xs" onclick="event.stopPropagation();navProj('review')">Review →</button>
    </div>` : '<div style="font-size:12.5px;color:var(--text-3);font-style:italic;margin-top:8px">No Drive link submitted yet.</div>'}

    ${(batch.fileLinks || []).length ? `<div style="margin:9px 0 16px;font-size:12px;color:var(--text-2)"><b>Attached deliverable / ZIP links</b>${batch.fileLinks.map(link => `<div style="margin-top:5px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap"><a href="https://${link.replace(/^https?:\/\//, '')}" target="_blank" rel="noopener" style="color:var(--accent)">${link}</a></div>`).join('')}</div>` : ''}

    ${batch.reviewComment ? `
    <div class="wi-section" style="margin-top:20px">Manager Feedback</div>
    <div style="background:var(--surface-2);border:1px solid var(--border);border-radius:8px;padding:12px 14px;margin-top:8px;font-size:12.5px;color:var(--text-2);line-height:1.6">${batch.reviewComment}</div>` : ''}

    ${batch.approvalNotice ? `<div style="margin-top:14px;background:var(--success-bg);border:1px solid rgba(5,150,105,.25);border-radius:8px;padding:11px 13px;font-size:12.5px;color:var(--success);font-weight:600">✓ ${batch.approvalNotice}</div>` : ''}

    ${(batch.editHistory || []).length ? `<div class="wi-section" style="margin-top:20px">Submission Edit History</div><div style="font-size:12px;color:var(--text-2);background:var(--surface-2);border:1px solid var(--border);border-radius:8px;padding:10px 12px">${batch.editHistory.map(edit => `<div style="margin-bottom:6px"><b>${edit.by}</b> · ${edit.time}<br>${edit.reason}</div>`).join('')}</div>` : ''}

    <div class="wi-section" style="margin-top:20px">Notes &amp; Activity</div>
    <div class="notes-panel">
      <div class="notes-feed" id="batch-notes-feed-${batch.id}">
        ${(batch.notes_thread || []).length > 0 ? (batch.notes_thread || []).map((n, idx) => `
        <div class="note-msg-row">
          <div class="av av-sm" style="background:${n.color};flex-shrink:0">${n.init}</div>
          <div class="note-bubble">
            <div class="note-bubble-head">
              <span class="note-author">${n.author}</span>
              <span class="note-role">${n.role}</span>
              <span class="note-time">${n.time}</span>
            </div>
            <div class="note-text">${n.text}</div>
          </div>
        </div>`).join('') : '<div class="notes-empty">No notes on this batch yet.</div>'}
      </div>
      <div class="notes-input-bar">
        <div class="av av-sm" style="background:var(--accent);flex-shrink:0" id="batch-notes-av-${batch.id}">PM</div>
        <div class="notes-input-wrap">
          <textarea class="notes-textarea" id="batch-cmt-${batch.id}" rows="1" placeholder="Add a note on this batch…" onkeydown="if(event.key==='Enter'&&(event.ctrlKey||event.metaKey)){event.preventDefault();submitBatchNote('${mod.id}','${batch.id}');}"></textarea>
          <button class="notes-send-btn" onclick="submitBatchNote('${mod.id}', '${batch.id}')" title="Send (Ctrl+Enter)">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2L1 7.5 6 9m8-7L9 15l-3-6m8-7L6 9"/></svg>
          </button>
        </div>
      </div>
    </div>

    <div style="height:1px;background:var(--border);margin:20px 0"></div>
    <div style="display:flex;gap:8px;flex-wrap:wrap">
      ${curRole === 'PRA' && batch.status === 'Awaiting PRA Review' ? `<button class="btn btn-primary btn-sm" onclick="sendBatchForManagerReview('${mod.id}', '${batch.id}')">Send for Manager's Review</button>` : ''}
      <button class="btn btn-ghost btn-sm" onclick="openEditBatchModal('${mod.id}', '${batch.id}')">Edit Submission</button>
      ${batch.status === 'Awaiting Review' ? '<button class="btn btn-primary btn-sm" onclick="navProj(&quot;review&quot;)">→ Go to Review Queue</button>' : ''
    }
        <button class="btn btn-ghost btn-sm" onclick="navProj('timeline')">View Timeline</button>
    </div >
  </div >
          <div style="height:40px"></div>
        `;
}

function submitBatchNote(modId, batchId) {
  const mod = MODULES_DATA[modId];
  if (!mod) return;
  const batch = (mod.batches || []).find(b => b.id === batchId);
  if (!batch) return;
  const input = document.getElementById('batch-cmt-' + batchId);
  if (!input) return;
  const text = input.value.trim();
  if (!text) { input.focus(); return; }

  const authorName = ROLES[curRole]?.name || 'Malhar';
  const roleColors = { 'PRA': '#6d6cf0', 'Editor': '#ea7c1e', 'QC': 'var(--success)', 'Manager': 'var(--accent)' };
  batch.notes_thread = batch.notes_thread || [];
  batch.notes_thread.push({
    author: authorName, role: curRole, text: text,
    time: formatCurrentTime(),
    color: roleColors[curRole] || 'var(--accent)',
    init: getInitials(authorName)
  });
  input.value = '';
  renderBatchDetail(mod, batch);
  setTimeout(() => {
    const feed = document.getElementById('batch-notes-feed-' + batchId);
    if (feed) feed.scrollTop = feed.scrollHeight;
  }, 30);
  showToast('Note added to batch', 'success');
}

function selMod(modId) {
  const m = MODULES_DATA[modId];
  if (!m) return;

  // Highlight module in tree
  document.querySelectorAll('.tree-mod, .tree-lesson, .tree-wi').forEach(el => el.classList.remove('selected'));
  const header = document.getElementById('mod-header-' + modId);
  if (header) header.classList.add('selected');

  const detail = document.getElementById('work-detail');
  detail.classList.add('show');
  document.getElementById('work-empty').style.display = 'none';

  detail.innerHTML = `
          <div class="mod-view-header">
      <div class="wi-bc">QM101 · ${m.num}</div>
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:16px;flex-wrap:wrap">
        <div>
          <div class="mod-view-title">${m.title}</div>
          <div class="mod-view-desc">${m.desc}</div>
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:6px">
          <span class="pill ${m.statusPill}" style="font-size:12px;font-weight:700;padding:4px 10px">${m.status}</span>
          <span style="font-size:12px;font-weight:700;color:${m.progressCol}">${m.progress}% Complete</span>
        </div>
      </div>

      <!-- Progress bar -->
      <div class="prog" style="margin-top:14px;height:6px">
        <div class="prog-fill" style="width:${m.progress}%;background:${m.progressCol}"></div>
      </div>

      <!-- Facts row -->
          <div class="mod-facts-grid" style="margin-top:16px">
            <div class="mod-fact-card">
              <div class="mf-label">Lessons</div>
              <div class="mf-val">${m.lessons.length} Lessons</div>
            </div>
            <div class="mod-fact-card">
              <div class="mf-label">Phase</div>
              <div class="mf-val">${m.phase}</div>
            </div>
            <div class="mod-fact-card">
              <div class="mf-label">Target / Timeline</div>
              <div class="mf-val">${m.target}</div>
            </div>
            <div class="mod-fact-card">
              <div class="mf-label">Team Assigned</div>
              <div class="mf-val" style="display:flex;align-items:center;gap:6px">
                ${m.team.map(t => `<div class="av av-sm" style="background:${t.color}" title="${t.name} (${t.role})">${t.init}</div>`).join('')}
                <span style="font-size:11.5px;color:var(--text-2);margin-left:2px">${m.team.map(t => t.name.split(' ')[0]).join(', ')}</span>
              </div>
            </div>
          </div>
    </div>

          <div class="mod-view-body">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">
              <div class="wi-section" style="margin-bottom:0">Review Batches (${(m.batches || []).length})</div>
              <span style="font-size:11px;color:var(--text-3)">Each batch is a review submission for this module</span>
            </div>

            <div class="mod-lessons-grid">
              ${(m.batches || []).length > 0 ? (m.batches || []).map(b => {
    const batchStatusColors = { 'Approved': 'p-complete', 'Request Approved': 'p-complete', 'Completed': 'p-complete', 'Reviewed': 'p-complete', 'Changes Requested': 'p-review', 'Awaiting Review': 'p-warning', 'Awaiting PRA Review': 'p-warning', 'In Progress': 'p-editing', 'Not Started': 'p-none' };
    const isPendingReview = b.status === 'Awaiting Review';
    return `
          <div class="batch-card ${isPendingReview ? 'is-review' : ''}" onclick="selBatch('${m.id}', '${b.id}')">
            <div class="batch-card-top">
              <span class="batch-num">${b.num}</span>
              <span class="pill ${batchStatusColors[b.status] || 'p-none'}" style="font-size:10px">${b.status}</span>
              <span style="margin-left:auto"><button class="btn btn-ghost btn-xs" onclick="event.stopPropagation();selBatch('${m.id}', '${b.id}')">View Details →</button></span>
            </div>
            <div class="batch-units-tag">
              ${b.units.length === 1 ? b.units[0] : b.units.length + ' units · ' + b.units.slice(0, 2).join(', ') + (b.units.length > 2 ? '…' : '')}
            </div>
            <div class="batch-card-foot">
              <span>By ${b.submittedBy}</span>
              <span style="color:var(--border-2)">·</span>
              <span>${b.submittedDate}</span>
              ${isPendingReview ? '<span style="color:var(--border-2)">·</span><span style="color:var(--violet);font-weight:600">Awaiting manager review</span>' : ''}
            </div>
          </div>`;
  }).join('') : '<div style="text-align:center;padding:30px 20px;color:var(--text-3);font-size:13px"><div style="font-size:22px;margin-bottom:8px">📋</div>No review batches yet.<br><span style="font-size:11.5px">Submit videos for review using the button below.</span></div>'}
      </div>
      <!-- OVERRIDE: old lessons grid replaced by batch grid above -->
      <div style="display:none" class="mod-lessons-grid-old">
      </div></div>

      <div style="margin-top:20px;display:flex;gap:8px;flex-wrap:wrap">
        <button class="btn btn-primary btn-sm" onclick="openAddBatchModal('${m.id}')">+ Add Batch for Review</button>
        <button class="btn btn-ghost btn-sm" onclick="navProj('timeline')">View in Timeline</button>
        ${m.id === 'm3' ? `<button class="btn btn-primary btn-sm" onclick="navProj('review')">→ Go to Review (V1)</button>` : ''}
      </div>
    </div>
  `;
}

function selLesson(lessonId) {
  let foundMod = null;
  let foundLesson = null;
  for (const mId in MODULES_DATA) {
    const l = MODULES_DATA[mId].lessons.find(x => x.id === lessonId);
    if (l) {
      foundMod = MODULES_DATA[mId];
      foundLesson = l;
      break;
    }
  }
  if (!foundMod || !foundLesson) return;

  // Make sure containing module is open
  const ch = document.getElementById('ch-' + foundMod.id);
  const cv = document.getElementById('chev-' + foundMod.id);
  if (ch && !ch.classList.contains('open')) {
    ch.classList.add('open');
    if (cv) cv.classList.add('open');
  }

  // Highlight in tree
  document.querySelectorAll('.tree-mod, .tree-lesson, .tree-wi').forEach(el => el.classList.remove('selected'));
  const lessonEl = document.getElementById('tree-' + lessonId);
  if (lessonEl) lessonEl.classList.add('selected');

  renderLessonDetail(foundMod, foundLesson);
}

function renderLessonDetail(mod, l) {
  const phCls = { 'Editing': 'p-editing', 'Storyboard': 'p-storyboard', 'Review': 'p-review', 'Shoot': 'p-shoot', 'Mock Shoot': 'p-shoot', 'QC': 'p-qc', 'Complete': 'p-complete', 'Planning': 'p-none', 'Scope': 'p-none' };
  const stCls = { 'In Progress': 'p-editing', 'Awaiting Review': 'p-review', 'Scheduled': 'p-shoot', 'Not Started': 'p-none', 'Done': 'p-complete', 'Pending Scope': 'p-none' };

  const hasVer = l.version !== '-';
  const isOverdue = l.due === 'Sep 11';
  const oi = l.owner === 'Unassigned' ? '-' : l.owner.split(' ').map(w => w[0]).join('');

  const detail = document.getElementById('work-detail');
  detail.classList.add('show');
  document.getElementById('work-empty').style.display = 'none';

  detail.innerHTML = `
    <div class="wi-header">
      <button class="back-mod-btn" onclick="selMod('${mod.id}')">← Back to ${mod.shortTitle} Overview</button>
      <div class="wi-bc">QM101 · ${mod.num} · ${l.title.split('-')[0].trim()}</div>
      <div class="wi-title">${l.itemTitle} - ${l.title}</div>
      <div class="wi-facts">
        <div class="wi-fact">
          <label>Phase</label>
          <div class="val"><span class="pill ${phCls[l.phase] || 'p-none'}">${l.phase}</span></div>
        </div>
        <div class="wi-fact">
          <label>Status</label>
          <div class="val"><span class="pill ${stCls[l.status] || 'p-none'}">${l.status}</span></div>
        </div>
        ${hasVer ? `<div class="wi-fact"><label>Version</label><div class="val"><span class="pill p-accent">${l.version}</span></div></div>` : ''}
        <div class="wi-fact">
          <label>Owner</label>
          <div class="val" style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
            <div class="av av-sm" style="background:${l.ownerColor}">${oi}</div>
            <span style="${l.owner === 'Unassigned' ? 'color:var(--danger);font-weight:700' : ''}">${l.owner}</span>
            <select class="quick-assign-select" onchange="quickAssignLesson('${mod.id}','${l.id}',this.value)" style="font-size:11px;padding:2px 8px;border:1px solid ${l.owner === 'Unassigned' ? 'var(--danger)' : 'var(--border-2)'};border-radius:6px;background:${l.owner === 'Unassigned' ? 'rgba(220,38,38,0.08)' : 'var(--surface)'};color:${l.owner === 'Unassigned' ? 'var(--danger)' : 'var(--text-2)'};font-weight:${l.owner === 'Unassigned' ? '700' : '500'};cursor:pointer;outline:none">
              <option value="" disabled selected>${l.owner === 'Unassigned' ? '👤 Assign Owner Now…' : '<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M11 2l3 3-8 8H3v-3l8-8z"/></svg> Change Owner'}</option>
              <option value="Ankit Verma">Ankit Verma (PRA)</option>
              <option value="Ravi Kumar">Ravi Kumar (Editor)</option>
              <option value="Stuti Garg">Stuti Garg (QC)</option>
              <option value="Priya S">Priya S (Senior PRA)</option>
              <option value="Malhar">Malhar (Manager)</option>
              <option value="Unassigned">Unassigned</option>
            </select>
          </div>
        </div>
        <div class="wi-fact">
          <label>Due</label>
          <div class="val" style="${isOverdue ? 'color:var(--danger);font-weight:700' : 'color:var(--text-2)'}">${l.due === '-' ? '-' : l.due}</div>
        </div>
      </div>
    </div>

    <div class="wi-body">
      <div class="wi-section">Description</div>
      <div class="wi-desc">${l.desc}</div>

      ${hasVer ? `
        <div class="wi-section" style="margin-top:16px">Version History &amp; Review Files</div>
        <div class="ver-item" onclick="navProj('review')">
          <div class="ver-tag">${l.version}</div>
          <div style="flex:1;min-width:0">
            <div class="ver-by">Deliverable uploaded by ${l.owner}</div>
            <div class="ver-date">10 Sep 2026 · Google Drive Link Shared</div>
          </div>
          <span class="pill ${l.status === 'Awaiting Review' ? 'p-warning' : 'p-complete'}">${l.status === 'Awaiting Review' ? 'Pending Review' : 'Approved'}</span>
          <button class="btn btn-primary btn-xs" onclick="event.stopPropagation();navProj('review')">Review →</button>
        </div>
      ` : ''}

      <div class="wi-section" style="margin-top:20px">Notes &amp; Activity</div>
      <div class="notes-panel">
        <div class="notes-feed" id="notes-feed-${l.id}">
          ${l.notes && l.notes.length > 0 ? l.notes.map((n, idx) => {
    const noteId = n.id || ('n-' + idx);
    n.id = noteId;
    if (n.isAudit) {
      return `
              <div class="note-audit-row" id="note-card-${noteId}">
                <div class="note-audit-line"></div>
                <div class="note-audit-body">
                  <span class="note-audit-text">${escapeHtml(n.text)}</span>
                  <span class="note-audit-time">${escapeHtml(n.time)}</span>
                </div>
              </div>`;
    }
    const editedBadge = n.edited
      ? `<span class="note-edited-badge" title="Edited on ${n.editedTime || 'unknown'}">· edited</span>` : '';
    const historyBtn = n.edited
      ? `<button class="btn btn-ghost btn-xs note-action-btn" title="Edited on ${n.editedTime || ''}" onclick="event.stopPropagation()" style="padding:1px 3px"><svg width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="8" cy="8" r="6.5"/><path d="M8 5v4l2.5 1.5"/></svg></button>` : '';
    return `
            <div class="note-msg-row" id="note-card-${noteId}">
              <div class="av av-sm" style="background:${n.color};flex-shrink:0">${n.init}</div>
              <div class="note-bubble">
                <div class="note-bubble-head">
                  <span class="note-author">${escapeHtml(n.author)}</span>
                  <span class="note-role">${escapeHtml(n.role)}</span>
                  ${editedBadge}
                  ${historyBtn}
                  <span class="note-time">${n.time}</span>
                  <button class="btn btn-ghost btn-xs note-action-btn" onclick="openEditNoteModal('${mod.id}', '${l.id}', '${noteId}')" title="Edit note" style="padding:1px 3px">
                    <svg width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M11 2l3 3-8 8H3v-3l8-8z"/></svg>
                  </button>
                  <button class="btn btn-ghost btn-xs note-action-btn" onclick="deleteLessonNote('${mod.id}', '${l.id}', '${noteId}')" title="Delete note" style="padding:1px 3px;color:var(--danger)">
                    <svg width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M2 4h12M5 4V2.5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5V4M6 7v5M10 7v5M3 4l1 10a1 1 0 001 1h6a1 1 0 001-1l1-10"/></svg>
                  </button>
                </div>
                <div class="note-text">${escapeHtml(n.text)}</div>
              </div>
            </div>`;
  }).join('') : '<div class="notes-empty">No notes yet. Add the first note below.</div>'}
        </div>
        <div class="notes-input-bar">
          <div class="av av-sm" style="background:var(--accent);flex-shrink:0" id="notes-av-${l.id}">PM</div>
          <div class="notes-input-wrap">
            <textarea class="notes-textarea" id="cmt-input-${l.id}" rows="1" placeholder="Add a note for ${l.owner}…" onkeydown="if(event.key==='Enter'&&(event.ctrlKey||event.metaKey)){event.preventDefault();submitAddLessonNote('${mod.id}','${l.id}');}"></textarea>
            <button class="notes-send-btn" onclick="submitAddLessonNote('${mod.id}', '${l.id}')" title="Send (Ctrl+Enter)">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2L1 7.5 6 9m8-7L9 15l-3-6m8-7L6 9"/></svg>
            </button>
          </div>
        </div>
      </div>

      <div style="height:1px;background:var(--border);margin:20px 0"></div>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <button class="btn btn-ghost btn-sm" onclick="openChangeStatusModal('${mod.id}', '${l.id}')"><svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M2 8a6 6 0 1110.4-4.1M2 4v4h4"/></svg> Change Status</button>
        <button class="btn btn-ghost btn-sm" onclick="openSetDueDateModal('${mod.id}', '${l.id}')"><svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="1" y="3" width="14" height="12" rx="1.5"/><path d="M5 1v4M11 1v4M1 7h14"/></svg> Set Due Date</button>
        ${l.status === 'Awaiting Review' ? `<button class="btn btn-primary btn-sm" onclick="navProj('review')">→ Go to Review Screen</button>` : ''}
      </div>
    </div>
    <div style="height:40px"></div>
  `;
}

function selWI(id, bc, title, phase, status, version, owner, ownerColor, due, desc) {
  // If id matches a lesson, use selLesson
  if (id && (id.startsWith('m1') || id.startsWith('m2') || id.startsWith('m3') || id.startsWith('m4') || id.startsWith('m5') || id.startsWith('m6'))) {
    selLesson(id);
    return;
  }
}


/* =============================================
   REVIEW SCREEN: ATTACHED FILES TOGGLE
   ============================================= */

function toggleAttachedFiles() {
  const tray = document.getElementById('attached-files-tray');
  const txt = document.getElementById('att-state-txt');
  const chev = document.getElementById('att-chev');
  if (!tray) return;
  const isHidden = tray.style.display === 'none' || tray.style.display === '';
  if (isHidden) {
    tray.style.display = 'block';
    if (txt) txt.textContent = 'Click to hide';
    if (chev) chev.style.transform = 'rotate(180deg)';
  } else {
    tray.style.display = 'none';
    if (txt) txt.textContent = 'Click to view';
    if (chev) chev.style.transform = 'rotate(0deg)';
  }
}







/* =============================================
           INIT
           ============================================= */
window.addEventListener('DOMContentLoaded', () => {
  buildGantt();
  // Initialize Module 1 cleanly in work items (collapsed others, no info blast)
  openModuleWork('m1');
  // Initial active view is dashboard
  nav('dashboard');
});


// Expose all functions to global scope for inline HTML handlers
window.closeAddModuleModal = closeAddModuleModal;
window.toggleRoleMenu = toggleRoleMenu;
window.openChangeStatusModal = openChangeStatusModal;
window.toggleTimelineMod = toggleTimelineMod;
window.toggleReviewActivityPanel = toggleReviewActivityPanel;
window.openAddLessonModal = openAddLessonModal;
window.closeEditNoteModalOut = closeEditNoteModalOut;
window.submitAddLessonNote = submitAddLessonNote;
window.closeEditTimelineModalOut = closeEditTimelineModalOut;
window.collapseAllTimeline = collapseAllTimeline;
window.submitBatchNote = submitBatchNote;
window.renderReviewVersions = renderReviewVersions;
window.submitAddTimeline = submitAddTimeline;
window.toggleAttachedFiles = toggleAttachedFiles;
window.submitChangeStatus = submitChangeStatus;
window.filterReviewHistory = filterReviewHistory;
window.renderBatchDetail = renderBatchDetail;
window.submitAddLesson = submitAddLesson;
window.syncNewLessonToTitle = syncNewLessonToTitle;
window.timelineStatusClass = timelineStatusClass;
window.updateTimelineItemStatus = updateTimelineItemStatus;
window.toggleTree = toggleTree;
window.addChangelogItem = addChangelogItem;
window.closeTimelineDetailModalOut = closeTimelineDetailModalOut;
window.getInitials = getInitials;
window.getExpiryDateStr = getExpiryDateStr;
window.closeSetDueDateModal = closeSetDueDateModal;
window.closeReqChangesModal = closeReqChangesModal;
window.toggleShareForm = toggleShareForm;
window.selWI = selWI;
window.openReviewHistory = openReviewHistory;
window.expandAllTimeline = expandAllTimeline;
window.submitSetDueDate = submitSetDueDate;
window.formatCurrentTime = formatCurrentTime;
window.submitEditTimeline = submitEditTimeline;
window.toggleTreeMod = toggleTreeMod;
window.closeEditTimelineModal = closeEditTimelineModal;
window.resetDecision = resetDecision;
window.expandAllModules = expandAllModules;
window.openApproveModal = openApproveModal;
window.sendBatchForManagerReview = sendBatchForManagerReview;
window.closeTimelineItemInfoOut = closeTimelineItemInfoOut;
window.closeAddTimelineModal = closeAddTimelineModal;
window.createProject = createProject;
window.setReasonText = setReasonText;
window.closeApproveModalOut = closeApproveModalOut;
window.closeAddBatchModalOut = closeAddBatchModalOut;
window.openLessonWork = openLessonWork;
window.openAddBatchModal = openAddBatchModal;
window.onAddTimelineModChange = onAddTimelineModChange;
window.escapeHtml = escapeHtml;
window.openSetDueDateModal = openSetDueDateModal;
window.refreshTimelineItemStatus = refreshTimelineItemStatus;
window.clickTreeMod = clickTreeMod;
window.closeEditBatchModalOut = closeEditBatchModalOut;
window.checkAndExpireReviews = checkAndExpireReviews;
window.closeTimelineDetailModal = closeTimelineDetailModal;
window.closeEditNoteModal = closeEditNoteModal;
window.submitShareForm = submitShareForm;
window.updateAddTimelineLessonPreview = updateAddTimelineLessonPreview;
window.selLesson = selLesson;
window.validateTlStartDate = validateTlStartDate;
window.submitEditNote = submitEditNote;
window.renderReviewHistory = renderReviewHistory;
window.openEditTimelineModal = openEditTimelineModal;
window.closeAddBatchModal = closeAddBatchModal;
window.closeReviewHistoryOut = closeReviewHistoryOut;
window.nav = nav;
window.selectReviewVersion = selectReviewVersion;
window.selectSetDueDateChip = selectSetDueDateChip;
window.submitRequestChanges = submitRequestChanges;
window.populateAddTimelineLessonOptions = populateAddTimelineLessonOptions;
window.openEditBatchModal = openEditBatchModal;
window.deleteLessonNote = deleteLessonNote;
window.submitApprove = submitApprove;
window.syncGanttRowHeights = syncGanttRowHeights;
window.openAddTimelineModal = openAddTimelineModal;
window.closeChangeStatusModal = closeChangeStatusModal;
window.selMod = selMod;
window.submitEditBatch = submitEditBatch;
window.closeModalOut = closeModalOut;
window.dateToDayIndex = dateToDayIndex;
window.showToast = showToast;
window.closeAddModuleModalOut = closeAddModuleModalOut;
window.navProj = navProj;
window.openEditNoteModal = openEditNoteModal;
window.switchRole = switchRole;
window.onAddTimelineLessonSelectChange = onAddTimelineLessonSelectChange;
window.openTimelineItemInfo = openTimelineItemInfo;
window.renderLessonDetail = renderLessonDetail;
window.closeSetDueDateModalOut = closeSetDueDateModalOut;
window.openModal = openModal;
window.closeChangeStatusModalOut = closeChangeStatusModalOut;
window.collapseAllModules = collapseAllModules;
window.openReqChangesModal = openReqChangesModal;
window.dismissFloat = dismissFloat;
window.closeAddTimelineModalOut = closeAddTimelineModalOut;
window.submitAddModule = submitAddModule;
window.selBatch = selBatch;
window.buildGantt = buildGantt;
window.findTimelineItem = findTimelineItem;
window.closeApproveModal = closeApproveModal;
window.openAddModuleModal = openAddModuleModal;
window.quickAssignLesson = quickAssignLesson;
window.setTimelineView = setTimelineView;
window.onTimelineMonthChange = onTimelineMonthChange;
window.timelineNav = timelineNav;
window.markAllRead = markAllRead;
window.closeEditBatchModal = closeEditBatchModal;
window.closeAddLessonModal = closeAddLessonModal;
window.calcDaysLeft = calcDaysLeft;
window.openModuleWork = openModuleWork;
window.closeModal = closeModal;
window.closeReviewHistory = closeReviewHistory;
window.closeAddLessonModalOut = closeAddLessonModalOut;
window.openModuleTimelineDetail = openModuleTimelineDetail;
window.submitAddBatch = submitAddBatch;
window.closeTimelineItemInfo = closeTimelineItemInfo;
window.closeReqChangesModalOut = closeReqChangesModalOut;
