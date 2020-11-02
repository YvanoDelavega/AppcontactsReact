import React, { Component } from "react";

export default class Todo extends Component {
  state = {
    afaire: "",
    items: [],
  };

  //   on écoute tout ce qu'on écrit dans notre input
  onChange = (event) => {
    //  console.log(this.state.afaire);
    //  console.log("avant " + this.state.afaire);
    this.setState({
      // event.target.name correspond à "afaire" de name="afaire"
      // event.target.value correspond à ce qu'on écrit dans notre input
      [event.target.name]: event.target.value,
    });

    // console.log(event.target.name);
    // console.log(event.target.value);
    console.log(this.state.afaire);
  };

  onSubmit = (event) => {
    //console.log("submit " + this.state.afaire);
    event.preventDefault(); // on empeche le comportement par défaut du formulaire
    this.setState({
      afaire: "",
      // ... : spread operator
      items: [...this.state.items, { afaire: this.state.afaire }],
    });
  };

  onDeleteTodoElement = (index) => {
    //  console.log(index);
    const nvItems = this.state.items;
    // console.log(this.state.items);
    // console.log(nvItems);
    nvItems.splice(index, 1);
    this.setState({
      items: nvItems,
    });
    //  console.log(this.state.items);

    // rq: faire ca ou ca, c pareil
    // this.state.items.splice(index, 1);
    // this.setState({
    //   items: this.state.items,
    // });
    // et en fait, si on fait juste this.state.items.splice(index, 1);
    // ca vire bien l'element de this.state.items, mais cela ne se vois pas a l'écran
    // apparement this.setState sert juste a raffrachir l'écran 
  };

  renderTodo = () => {
    return this.state.items.map((item, index) => {
      return (
        <div className="card mb-3" key={index}>
          <div className="card-body">
            <h4>
              {item.afaire}
              <i
                className="fas fa-times"
                onClick={() => this.onDeleteTodoElement(index)}
                style={{ cursor: "pointer", color: "red", float: "right" }}
              ></i>
            </h4>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="card my-3">
          <div className="card-header">Todo list</div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="afaire">Chose à faire</label>
                <input
                  type="text"
                  name="afaire"
                  className="form-control form-control-lg"
                  onChange={this.onChange}
                  value={this.state.afaire} // lorsqu'on submit, ca va permettre d'effacer la value car on mets afaire=''
                />
              </div>

              <button className="btn btn-primary btn-block" type="submit">
                Ajouter à la liste des choses à faire
              </button>
            </form>
          </div>
        </div>
        {this.renderTodo()}
      </React.Fragment>
    );
  }
}
