<button onClick={this.openEditModal(list)} className="listEdit">=



$.ajax({
    type: 'GET',
    url: '/api/tasks',
    data: {task: {list_id: 32}}
})
$.ajax({
    type: 'POST',
    url: 'api/users',
    data: {user: {first_name: 'Jeff',
                  last_name: 'Gronewold',
                  user_name: 'tanktop',
                  password: 'password'}}
})

$.ajax({
  type: 'DELETE',
  url: 'api/session'
})




$.ajax({
  type: 'Get',
  url:'api/lists/1'
  })


   <form>
     <label value="Enter a new list name:">
       <input type="text"
               value={this.state.new_list}
               onChange={this.update("user_name")}
               className="list-input"
               />
     </label>
   </form>


   <form onSubmit={this.handleNewTask}>
     <input type="text"
             value="New task"
             onChange={this.update("title")}
     />
   <input type="submit" value="Add task" />

   </form>

   const doneStatus = {[task.id]: task.done};
   const newState = merge(this.state.done, doneStatus);
   this.setState({done: newState});
