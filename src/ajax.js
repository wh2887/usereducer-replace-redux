// 假 ajax
// 两秒钟后，根据 path 返回一个对象，必定成功不会失败
function ajax(path) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (path === "/user") {
                resolve({
                    id: 1,
                    name: "McCall"
                });
            } else if (path === "/books") {
                resolve([
                    {
                        id: 1,
                        name: "JavaScript 高级程序设计"
                    },
                    {
                        id: 2,
                        name: "JavaScript 精粹"
                    }
                ]);
            } else if (path === "/movies") {
                resolve([
                    {
                        id: 1,
                        name: "爱在黎明破晓前"
                    },
                    {
                        id: 2,
                        name: "爱在日落黄昏时"
                    }
                ]);
            }
        }, 2000);
    });
}

export default ajax;