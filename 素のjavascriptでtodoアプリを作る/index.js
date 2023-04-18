const onClickAdd = () => {
    //テキストボックスの値を取得し、初期化する
    const inputText = document.querySelector("#add-text").value;
    document.querySelector("#add-text").value = "";

    createIncompleteList(inputText);

};

    // 未完了リストに追加する関数
    const createIncompleteList = (text) =>{
    //liを生成
    const li = document.createElement("li");

    //divタグを生成
    const div = document.createElement("div");
    div.className = "list-row";

    //pタグを生成
    const p = document.createElement("p");
    p.innerText = text;

    //button(完了)タグ生成
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    completeButton.addEventListener("click", ()=>{
        // 押された完了ボタンの親タグliを未完了リストから削除
        deleteFromIncompleteList(completeButton.parentNode.parentNode);
        // 完了リストに追加する要素
        const addTarget = completeButton.parentNode;
        // TODO内容テキストを取得
        const text = addTarget.firstElementChild.innerText;
        addTarget.textContent = null;

        const li = document.createElement("li");
        const p = document.createElement("p");
        p.innerText = text;

        // 戻すボタンを生成
        const backButton = document.createElement("button");
        backButton.innerText = "戻す";
        backButton.addEventListener("click", ()=>{
            // 押された戻すボタンの親タグを完了リストから削除
            const deleteTarget = backButton.parentNode.parentNode;
            document.querySelector("#complete-list").removeChild(deleteTarget);

            // テキストの取得
            const text = backButton.parentNode.firstElementChild.innerText;
            createIncompleteList(text);
            
        });

        // 実際に要素を生み出してるのはここ！
        addTarget.appendChild(p);
        addTarget.appendChild(backButton);
        li.appendChild(addTarget);

        // 完了リストに追加
        document.querySelector("#complete-list").appendChild(li);
        
    });
    
    //button(削除)タグ生成
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    deleteButton.addEventListener("click", ()=>{
       //押された削除ボタンの親タグliを未完了リストから削除
       deleteFromIncompleteList(deleteButton.parentNode.parentNode);
  
    });


    //liタグの子要素に各要素を設定
    li.appendChild(div).appendChild(p);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);


    //未完了リストに追加
    document.querySelector("#incomplete-list").appendChild(li);

    //未完了リストから指定の要素を削除　削除関数
    const deleteFromIncompleteList = (target) =>{
        const completeTarget = completeButton.parentNode.parentNode;
        document.querySelector("#incomplete-list").removeChild(target);
    }
    }



document.querySelector("#add-button").addEventListener("click", () => onClickAdd());

