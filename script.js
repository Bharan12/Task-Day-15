let div = document.getElementById("root")

setTimeout(() => {
    console.log("Timer 10")
    div.innerHTML = '<h1>10</h1>'
    setTimeout(() => {
        console.log("Timer 9")
        div.innerHTML = '<h1>9</h1>'
        setTimeout(() => {
            console.log("Timer 8")
            div.innerHTML = '<h1>8</h1>'
            setTimeout(() => {
                console.log("Timer 7")
                div.innerHTML = '<h1>7</h1>'
                setTimeout(() => {
                    console.log("Timer 6")
                    div.innerHTML = '<h1>6</h1>'
                    setTimeout(() => {
                        console.log("Timer 5")
                        div.innerHTML = '<h1>5</h1>'
                        setTimeout(() => {
                            console.log("Timer 4")
                            div.innerHTML = '<h1>4</h1>'
                            setTimeout(() => {
                                console.log("Timer 3")
                                div.innerHTML = '<h1>3</h1>'
                                setTimeout(() => {
                                    console.log("Timer 2")
                                    div.innerHTML = '<h1>2</h1>'
                                    setTimeout(() => {
                                        console.log("Timer 1")
                                        div.innerHTML = '<h1>1</h1>'
                                        setTimeout(() => {
                                            div.innerHTML = '<h1>Happy Indpendence day</h1>'
                                        }, 1000)
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)