

( ()=> {
  
  createTodoTitle =(title = 'Секретные дела')=> {
    let listTitle = document.createElement('h2');
    listTitle.innerHTML = title;  
    return listTitle;
  };
  
  createTodoItemForm =()=> {

    let cForm = document.createElement('form');
    let cInput = document.createElement('input');
    let cButtonWrapper = document.createElement('div');
    let cButton = document.createElement('button');
    
    cInput.placeholder = 'Не забыть выпить чай ...';
    cButton.textContent = 'Добавить';

    cButtonWrapper.append(cInput, cButton);
    cForm.append(cButtonWrapper);

    return {
      cForm,
      cInput,
      cButton,
    };
    
  };
  
  createTodoList =()=> {

    let todoList = document.createElement('ul');
    todoList.classList = 'todoList';
    return todoList;
  };
  
  createTodoItem =(message)=> {
    
    let item = document.createElement('li');
    item.textContent = message;
    item.classList = 'item';
    
    let doneBtn = document.createElement('button');
    doneBtn.textContent = 'Готово';
    doneBtn.classList = 'doneBtn';
    
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Удалить';
    deleteBtn.classList = 'deleteBtn';
    
    let btnWrapper = document.createElement('div');
    
    btnWrapper.append(doneBtn, deleteBtn);
    item.append(btnWrapper);
    
    return {
      item,
      doneBtn,
      deleteBtn
    };
    
  };
  
  let createTodoApp = (appId, appTitle) => {
    
    let container = document.getElementById(appId);
    
    
    let listTitleRender = createTodoTitle(appTitle);
    let formRender = createTodoItemForm();
    let listRender = createTodoList();
    // let itemRender = createTodoItem();
    
    container.append(listTitleRender);
    container.append(formRender.cForm);
    container.append(listRender);
  
    formRender.cForm.addEventListener('submit', (e)=> {

      e.preventDefault();
      
//       Проверка инпута
      if (!formRender.cInput.value) {
        return;
      };
      let itemRender = createTodoItem(formRender.cInput.value);

      itemRender.doneBtn.addEventListener('click', ()=> {
        itemRender.item.classList.toggle('doneItem');
      });
      
      itemRender.deleteBtn.addEventListener('click', ()=> {
        if ( confirm('Удалить ?') ) {
           itemRender.item.remove();
        };
      });
      
      listRender.append(itemRender.item);
      formRender.cInput.value = '';
    });
  };
 window.createTodoApp = createTodoApp;
})();

