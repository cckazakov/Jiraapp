const project = (state =  [{"expand":"description,lead,issueTypes,url,projectKeys",
"self":"https://finaltester.atlassian.net/rest/api/2/project/10000",
"id":"10000",
"key":"FIN",
"name":"finaltest",
"projectTypeKey":"software",
"simplified":false,
"style":"classic",
"isPrivate":false}], action) => {
    switch (action.type) {
      case 'ADD_PROJECT':
        return state.concat([action.data])
      case 'DELETE_PROJECT':
        return state.filter((project) => project.id !== action.id)
      case 'EDIT_PROJECT':
        return state.map((project) => project.id === action.id ? { ...project, editing: !project.editing } : project)
      case 'UPDATE':
        return state.map((project) => {
          if (project.id === action.id) {
            return {
              ...project,
              title: action.data.newTitle,
              message: action.data.newMessage,
              editing: !project.editing
            }
          } else return project;
        })
      default:
      return state;
    }
  }
  export default project;


  