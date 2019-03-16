const task = (state =  [{"expand":"description,lead,issueTypes,url,taskKeys",
"self":"https://finaltester.atlassian.net/rest/api/2/task/10000",
"id":"10000",
"key":"FIN",
"name":"finaltest",
"taskTypeKey":"software",
"simplified":false,
"style":"classic",
"isPrivate":false}], action) => {
    switch (action.type) {
      case 'ADD_task':
        return state.concat([action.data])
      case 'DELETE_task':
        return state.filter((task) => task.id !== action.id)
      case 'EDIT_task':
        return state.map((task) => task.id === action.id ? { ...task, editing: !task.editing } : task)
      case 'UPDATE':
        return state.map((task) => {
          if (task.id === action.id) {
            return {
              ...task,
              expand: action.data.newExpand,
              self: action.data.newSelf,
              key: action.data.newKey,
              taskTypeKey: action.data.newtaskTypeKey,
              simplified: action.data.newSimplified,
              style: action.data.newStyle,
              isPrivate: action.data.newIsPrivate,
              editing: !task.editing
            }
          } else return task;
        })
      default:
      return state;
    }
  }
  export default task;


  