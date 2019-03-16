const user = (state =  [{"expand":"description,lead,issueTypes,url,userKeys",
"self":"https://finaltester.atlassian.net/rest/api/2/user/10000",
"id":"10000",
"key":"FIN",
"name":"finaltest",
"userTypeKey":"software",
"simplified":false,
"style":"classic",
"isPrivate":false}], action) => {
    switch (action.type) {
      case 'ADD_user':
        return state.concat([action.data])
      case 'DELETE_user':
        return state.filter((user) => user.id !== action.id)
      case 'EDIT_user':
        return state.map((user) => user.id === action.id ? { ...user, editing: !user.editing } : user)
      case 'UPDATE':
        return state.map((user) => {
          if (user.id === action.id) {
            return {
              ...user,
              expand: action.data.newExpand,
              self: action.data.newSelf,
              key: action.data.newKey,
              userTypeKey: action.data.newuserTypeKey,
              simplified: action.data.newSimplified,
              style: action.data.newStyle,
              isPrivate: action.data.newIsPrivate,
              editing: !user.editing
            }
          } else return user;
        })
      default:
      return state;
    }
  }
  export default user;


  