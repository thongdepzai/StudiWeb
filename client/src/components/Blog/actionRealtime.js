
// id: "5",
// body: "Second comment second child",
// username: "thong",
// userId: "5",
// parentId: null,
// createdAt: "2021-08-16T23:00:33.010+02:00",





export  const CreateComment = async (text, parentId = 'null') => {
 const name = localStorage.getItem('name')
 const id = localStorage.getItem('id')
 const idBlog = localStorage.getItem('idBlog')

 console.log(idBlog)

  return {
    body: text,
    parentId,
    userId:id,
    blogId:idBlog,
    username:name,
    createdAt: new Date().toISOString(),
  };  
  
};


export const updateComment = async (text) => {
  return { text };
};

export const deleteComment = async () => {
  return {};
};
