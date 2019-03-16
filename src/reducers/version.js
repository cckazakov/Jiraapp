const version = (state =  [{"expand":"description,lead,issueTypes,url,versionKeys",
"self":"https://finaltester.atlassian.net/rest/api/2/version/10000",
"id":"10000",
"key":"FIN",
"name":"finaltest",
"versionTypeKey":"software",
"simplified":false,
"style":"classic",
"isPrivate":false}], action) => {
    switch (action.type) {
      case 'ADD_version':
        return state.concat([action.data])
      case 'DELETE_version':
        return state.filter((version) => version.id !== action.id)
      case 'EDIT_version':
        return state.map((version) => version.id === action.id ? { ...version, editing: !version.editing } : version)
      case 'UPDATE':
        return state.map((version) => {
          if (version.id === action.id) {
            return {
              ...version,
              expand: action.data.newExpand,
              self: action.data.newSelf,
              key: action.data.newKey,
              versionTypeKey: action.data.newversionTypeKey,
              simplified: action.data.newSimplified,
              style: action.data.newStyle,
              isPrivate: action.data.newIsPrivate,
              editing: !version.editing
            }
          } else return version;
        })
      default:
      return state;
    }
  }
  export default version;


  