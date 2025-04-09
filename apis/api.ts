export const fetchPosts = async () => {
  try {
    const response = await fetch("https://api.restful-api.dev/objects");
    const result = await response.json();
    if (!result) {
      throw new Error("Invalid API response");
    }
    // console.log(result);
    return result;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

interface Post {
  userId?: number;
  id?: number;
  name?: string;
  data?: object;
}
export const postData = async (posts: Post): Promise<any> => {
  try {
    const response = await fetch("https://api.restful-api.dev/objects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(posts),
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.log("Error adding post:", error);
    throw error;
  }
};

// export const updateData = async ({id,name} : {id:number, name:string}): Promise<any> => {
//   try {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
//       method: 'PATCH',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         name :name,
//       }),
//     });
//     const result = await response.json();
//     console.log(result);
//     return result;
//   } catch (error) {
//     console.log('Error updating post:', error);
//     throw error;
//   }
// };
