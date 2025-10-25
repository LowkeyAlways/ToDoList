const KEY = 'ma-journee-tasks-v1'

export function loadTasks() {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return []
    return JSON.parse(raw)
  } catch (e) {
    console.error('Failed to load tasks', e)
    return []
  }
}

export function saveTasks(tasks) {
  try {
    localStorage.setItem(KEY, JSON.stringify(tasks))
  } catch (e) {
    console.error('Failed to save tasks', e)
  }
}
