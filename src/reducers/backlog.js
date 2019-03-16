const backlog = (state =  [{"expand":"description,lead,issueTypes,url,backlogKeys",
"self":"https://finaltester.atlassian.net/rest/api/2/backlog/10000",
"id":"10000",
"key":"FIN",
"name":"finaltest",
"backlogTypeKey":"software",
"simplified":false,
"style":"classic",
"isPrivate":false}], action) => {
    switch (action.type) {
      case 'ADD_backlog':
        return state.concat([action.data])
      case 'DELETE_backlog':
        return state.filter((backlog) => backlog.id !== action.id)
      case 'EDIT_backlog':
        return state.map((backlog) => backlog.id === action.id ? { ...backlog, editing: !backlog.editing } : backlog)
      case 'UPDATE':
        return state.map((backlog) => {
          if (backlog.id === action.id) {
            return {
              ...backlog,
              expand: action.data.newExpand,
              self: action.data.newSelf,
              key: action.data.newKey,
              backlogTypeKey: action.data.newbacklogTypeKey,
              simplified: action.data.newSimplified,
              style: action.data.newStyle,
              isPrivate: action.data.newIsPrivate,
              editing: !backlog.editing
            }
          } else return backlog;
        })
      default:
      return state;
    }
  }
  export default backlog;


  