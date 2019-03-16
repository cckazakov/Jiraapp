const bug = (state =  [{"expand":"description,lead,issueTypes,url,bugKeys",
"self":"https://finaltester.atlassian.net/rest/api/2/bug/10000",
"id":"10000",
"key":"FIN",
"name":"finaltest",
"bugTypeKey":"software",
"simplified":false,
"style":"classic",
"isPrivate":false}], action) => {
    switch (action.type) {
      case 'ADD_bug':
        return state.concat([action.data])
      case 'DELETE_bug':
        return state.filter((bug) => bug.id !== action.id)
      case 'EDIT_bug':
        return state.map((bug) => bug.id === action.id ? { ...bug, editing: !bug.editing } : bug)
      case 'UPDATE':
        return state.map((bug) => {
          if (bug.id === action.id) {
            return {
              ...bug,
              expand: action.data.newExpand,
              self: action.data.newSelf,
              key: action.data.newKey,
              bugTypeKey: action.data.newbugTypeKey,
              simplified: action.data.newSimplified,
              style: action.data.newStyle,
              isPrivate: action.data.newIsPrivate,
              editing: !bug.editing
            }
          } else return bug;
        })
      default:
      return state;
    }
  }
  export default bug;


  