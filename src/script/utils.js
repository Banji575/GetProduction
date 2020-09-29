export const query = () =>{
    return {
        "method": "POST",
        "headers": {
          "content-type": "application/json"
        },
        "body": JSON.stringify({
          query: `{
                  posts(options: {paginate:{
                    page:1,
                    limit:5
                  }}) {
                  
                    data{
                      id
                      title
                      body
                    }
                  }
                }`
        })
      }
}