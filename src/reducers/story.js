const story = (state =  [{"expand":"description,lead,issueTypes,url,storyKeys",
"self":"https://finaltester.atlassian.net/rest/api/2/story/10000",
"id":"10000",
"key":"FIN",
"name":"finaltest",
"storyTypeKey":"software",
"simplified":false,
"style":"classic",
"isPrivate":false}], action) => {
    switch (action.type) {
      case 'ADD_story':
        return state.concat([action.data])
      case 'DELETE_story':
        return state.filter((story) => story.id !== action.id)
      case 'EDIT_story':
        return state.map((story) => story.id === action.id ? { ...story, editing: !story.editing } : story)
      case 'UPDATE':
        return state.map((story) => {
          if (story.id === action.id) {
            return {
              ...story,
              expand: action.data.newExpand,
              self: action.data.newSelf,
              key: action.data.newKey,
              storyTypeKey: action.data.newstoryTypeKey,
              simplified: action.data.newSimplified,
              style: action.data.newStyle,
              isPrivate: action.data.newIsPrivate,
              editing: !story.editing
            }
          } else return story;
        })
      default:
      return state;
    }
  }
  export default story;


  