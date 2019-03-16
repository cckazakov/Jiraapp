const sprint = (state =  [{"expand":"description,lead,issueTypes,url,sprintKeys",
"self":"https://finaltester.atlassian.net/rest/api/2/sprint/10000",
"id":"10000",
"key":"FIN",
"name":"finaltest",
"sprintTypeKey":"software",
"simplified":false,
"style":"classic",
"isPrivate":false}], action) => {
    switch (action.type) {
      case 'ADD_sprint':
        return state.concat([action.data])
      case 'DELETE_sprint':
        return state.filter((sprint) => sprint.id !== action.id)
      case 'EDIT_sprint':
        return state.map((sprint) => sprint.id === action.id ? { ...sprint, editing: !sprint.editing } : sprint)
      case 'UPDATE':
        return state.map((sprint) => {
          if (sprint.id === action.id) {
            return {
              ...sprint,
              expand: action.data.newExpand,
              self: action.data.newSelf,
              key: action.data.newKey,
              sprintTypeKey: action.data.newsprintTypeKey,
              simplified: action.data.newSimplified,
              style: action.data.newStyle,
              isPrivate: action.data.newIsPrivate,
              editing: !sprint.editing
            }
          } else return sprint;
        })
      default:
      return state;
    }
  }
  export default sprint;


  