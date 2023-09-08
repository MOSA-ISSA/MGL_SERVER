const baseUrl = "http://localhost:2999"
//"https://mgl-server.onrender.com"


const fetchApi = async (route, method, body) => {
    const url = baseUrl + route;
    return await fetch(url, {
        method: method || 'GET',
        headers: {
            'Content-Type': 'application/json', 
        },
        body: body,

    }).then(res => res.json())
    .catch((error) => {
        console.error("fetch Error", error.message);
    });
}

const checkRespond = async () => {
    const url = "/checkRespond";
    return await fetchApi(url , 'GET' , null)
}


const getModuleByName = async (url,name) => {
    // const url = "/getPlatformsByName";
    const jsonString = JSON.stringify(name);
    try {
      const response = await fetchApi("/"+url, 'POST', jsonString);
      return response;
    }
    catch (error) {
        console.log("error",error);
        throw error;
    }
};
// getModuleByName('getPlatformsByName',{ name: "test"}).then((v)=>{console.log(v);})

const getAllOf = async (url) => {
    //"getAllPlatforms","getAllDeveloper","getAllGenreNamesAndImage","getAllPublishers","getAllTagNames"
    try {
      const response = await fetchApi("/"+url, 'GET', null);
      return response;
    }
    catch (error) {
        console.log("error",error);
        throw error;
    }
};

module.exports={checkRespond,getModuleByName,getAllOf}