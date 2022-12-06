import React from "react";
// import PropTypes from "prop-types";

const TodoList = (props) => {
  return (
    <section>
      <h1>Дела</h1>
      <table class="table is-hoverable is-fullwidth">
        <tbody>
          {props.list.map((item) => (
            <tr key={item.key}>
              <td>
                {item.done && <del>{item.title}</del>}
                {!item.done && item.title}
              </td>
              <td>
                <button
                  className="button is-success"
                  title = "Пометить как сделанное"
                  disabled = {item.done}
                  onClick = {(e) => props.setDone(item.key)}
                >&#9745;</button>
              </td>
              <td>
                <button
                  className="button is-danger"
                  title = "Удалить"
                >&#9746;</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

// todoList.propTypes = {
    
// };

export default TodoList;

