import React from 'react';


class Page extends React.Component {
  remove(row){
    console.log(row.target.id);
    $(row.target).parent().parent().hide();
  }
  render() {
    const name = this.props.obj.name;
    const content = this.props.obj.content;
    const id = this.props.obj.id;
    return(
        <tr id={id} >
          <td> {name} </td>
          <td> {content} </td>
          <td> <a   href={"/pages/"+id}> Show</a></td>
          <td> <a   href={'/pages/'+id+'/edit'}> Edit</a></td>
          <td><a onClick={this.remove.bind(this)} id={Date.now()} href={'/pages/'+id} data-method='delete' data-remote='true'> Delete</a></td>
        </tr>  
    );
  }
}

export default Page;



