module.exports = function(gulp, require, tasksModule) {
  tasksModule = tasksModule || './tasks';
  try {
    var tasks = require(tasksModule);
    for (var key in tasks) {
      tasks[key](gulp);
    }
    return tasks;
  }
  catch (e) {
    if (e.code === 'MODULE_NOT_FOUND') {
      return 'No external tasks found in ' + tasksModule;
    }
    throw e;
  }
};
