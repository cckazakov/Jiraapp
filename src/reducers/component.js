const component = (state =  [{"expand":"description,lead,issueTypes,url,componentKeys",
"self":"https://finaltester.atlassian.net/rest/api/2/component/10000",
"id":"10000",
"key":"FIN",
"name":"finaltest",
"componentTypeKey":"software",
"simplified":false,
"style":"classic",
"isPrivate":false}], action) => {
    switch (action.type) {
      case 'ADD_component':
        return state.concat([action.data])
      case 'DELETE_component':
        return state.filter((component) => component.id !== action.id)
      case 'EDIT_component':
        return state.map((component) => component.id === action.id ? { ...component, editing: !component.editing } : component)
      case 'UPDATE':
        return state.map((component) => {
          if (component.id === action.id) {
            return {
              ...component,
              expand: action.data.newExpand,
              self: action.data.newSelf,
              key: action.data.newKey,
              componentTypeKey: action.data.newcomponentTypeKey,
              simplified: action.data.newSimplified,
              style: action.data.newStyle,
              isPrivate: action.data.newIsPrivate,
              editing: !component.editing
            }
          } else return component;
        })
      default:
      return state;
    }
  }
  export default component;


  