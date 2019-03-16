const epic = (state =  [{"expand":"description,lead,issueTypes,url,epicKeys",
"self":"https://finaltester.atlassian.net/rest/api/2/epic/10000",
"id":"10000",
"key":"FIN",
"name":"finaltest",
"epicTypeKey":"software",
"simplified":false,
"style":"classic",
"isPrivate":false}], action) => {
    switch (action.type) {
      case 'ADD_epic':
        return state.concat([action.data])
      case 'DELETE_epic':
        return state.filter((epic) => epic.id !== action.id)
      case 'EDIT_epic':
        return state.map((epic) => epic.id === action.id ? { ...epic, editing: !epic.editing } : epic)
      case 'UPDATE':
        return state.map((epic) => {
          if (epic.id === action.id) {
            return {
              ...epic,
              expand: action.data.newExpand,
              self: action.data.newSelf,
              key: action.data.newKey,
              epicTypeKey: action.data.newepicTypeKey,
              simplified: action.data.newSimplified,
              style: action.data.newStyle,
              isPrivate: action.data.newIsPrivate,
              editing: !epic.editing
            }
          } else return epic;
        })
      default:
      return state;
    }
  }
  export default epic;


  