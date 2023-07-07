function getFilesToBackup(lastBackup, changes) {
  let toBackupList = [];

  changes.forEach((change) => {
    if (change[1] > lastBackup) {
      toBackupList.push(change[0]);
    }
  });

  return [...new Set(toBackupList)].sort((a, b) => a - b);
}
