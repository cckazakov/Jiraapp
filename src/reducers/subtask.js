const subtask = (state =  [{"expand":"description,lead,issueTypes,url,subtaskKeys",
"self":"https://finaltester.atlassian.net/rest/api/2/subtask/10000",
"id":"10000",
"key":"FIN",
"name":"finaltest",
"subtaskTypeKey":"software",
"simplified":false,
"style":"classic",
"isPrivate":false}], action) => {
    switch (action.type) {
      case 'ADD_subtask':
        return state.concat([action.data])
      case 'DELETE_subtask':
        return state.filter((subtask) => subtask.id !== action.id)
      case 'EDIT_subtask':
        return state.map((subtask) => subtask.id === action.id ? { ...subtask, editing: !subtask.editing } : subtask)
      case 'UPDATE':
        return state.map((subtask) => {
          if (subtask.id === action.id) {
            return {
              ...subtask,
              expand: action.data.newExpand,
              self: action.data.newSelf,
              key: action.data.newKey,
              subtaskTypeKey: action.data.newsubtaskTypeKey,
              simplified: action.data.newSimplified,
              style: action.data.newStyle,
              isPrivate: action.data.newIsPrivate,
              editing: !subtask.editing
            }
          } else return subtask;
        })
      default:
      return state;
    }
  }
  export default subtask;


  