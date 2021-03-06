import { sprintf } from 'sprintf-js'

/**
 * Converts task id to name of the room for that id
 */
export function roomName (projectName: string, taskId: string): string {
  return sprintf('project%stask%s', projectName, taskId)
}

/**
 * Builds the path for sync data
 */
export function getPath (
  dataDir: string, projectName: string,
  taskId: string, workerId: string): string {
  return sprintf('%s/%s/submissions/shared/%s/%s/',
    dataDir, projectName, taskId, workerId)
}

/**
 * Saves a timestamped file
 */
export function getFile (path: string) {
  const timestamp = Date.now()
  return sprintf('%s/%s.json', path, timestamp)
}
