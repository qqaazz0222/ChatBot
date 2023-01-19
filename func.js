import { Configuration, OpenAIApi } from "https://cdn.skypack.dev/openai";
var chatcontent = document.querySelector(".chat-content");
document.querySelector("#send").addEventListener("click", function () {
    var inputdata = document.querySelector("#input").value;
    document.querySelector("#input").value = "";
    var posttemplate = `
<div class="line">
    <div class="chat-box mine">${inputdata}</div>
    </div>
    `;
    document
        .querySelector(".chat-content")
        .insertAdjacentHTML("beforeend", posttemplate);
    chatcontent.scrollTop = chatcontent.scrollHeight;
    const configuration = new Configuration({
        apiKey: "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",
    });
    const openai = new OpenAIApi(configuration);

    openai
        .createCompletion({
            model: "text-davinci-003",
            prompt: inputdata,
            temperature: 0.7,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        })
        .then((result) => {
            console.log(result);
            var gettemplate = `
            <div class="line">
                <div class="chat-box">${result.data.choices[0].text}</div>
                </div>
                `;
            document
                .querySelector(".chat-content")
                .insertAdjacentHTML("beforeend", gettemplate);
            chatcontent.scrollTop = chatcontent.scrollHeight;
        });
});
document.querySelector("#input").addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        var inputdata = document.querySelector("#input").value;
        document.querySelector("#input").value = "";
        var posttemplate = `
<div class="line">
    <div class="chat-box mine">${inputdata}</div>
    </div>
    `;
        document
            .querySelector(".chat-content")
            .insertAdjacentHTML("beforeend", posttemplate);
        chatcontent.scrollTop = chatcontent.scrollHeight;
        const configuration = new Configuration({
            apiKey: "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",
        });
        const openai = new OpenAIApi(configuration);

        openai
            .createCompletion({
                model: "text-davinci-003",
                prompt: inputdata,
                temperature: 0.7,
                max_tokens: 256,
                top_p: 1,
                frequency_penalty: 0,
                presence_penalty: 0,
            })
            .then((result) => {
                console.log(result);
                var gettemplate = `
            <div class="line">
                <div class="chat-box">${result.data.choices[0].text}</div>
                </div>
                `;
                document
                    .querySelector(".chat-content")
                    .insertAdjacentHTML("beforeend", gettemplate);
                chatcontent.scrollTop = chatcontent.scrollHeight;
            });
    }
});
