const label = (state =  [{"expand":"description,lead,issueTypes,url,labelKeys",
"self":"https://finaltester.atlassian.net/rest/api/2/label/10000",
"id":"10000",
"key":"FIN",
"name":"finaltest",
"labelTypeKey":"software",
"simplified":false,
"style":"classic",
"isPrivate":false}], action) => {
    switch (action.type) {
      case 'ADD_label':
        return state.concat([action.data])
      case 'DELETE_label':
        return state.filter((label) => label.id !== action.id)
      case 'EDIT_label':
        return state.map((label) => label.id === action.id ? { ...label, editing: !label.editing } : label)
      case 'UPDATE':
        return state.map((label) => {
          if (label.id === action.id) {
            return {
              ...label,
              expand: action.data.newExpand,
              self: action.data.newSelf,
              key: action.data.newKey,
              labelTypeKey: action.data.newlabelTypeKey,
              simplified: action.data.newSimplified,
              style: action.data.newStyle,
              isPrivate: action.data.newIsPrivate,
              editing: !label.editing
            }
          } else return label;
        })
      default:
      return state;
    }
  }
  export default label;


  