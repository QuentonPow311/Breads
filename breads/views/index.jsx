const React = require("react");
const Default = require("./layout/default");


function Index({ breads, title }) {
  return (
    <Default title={title}>
      <h2>Index Page</h2>
      {/* This jsx comment.*/}
      {/*<p>I have {breads[0].name} bread!</p>*/}
      <ul>
        {breads.map((bread) => {
          return (
            <li key={bread.id}>
              <a href={`/breads/${bread.id}`}>
                {bread.name}</a>
            </li>
          );
        })}
      </ul>
      <div className="newButton">
  <a href="/breads/new"><button>Add a new bread</button></a>
</div>

    </Default>
  );
}


module.exports = Index;
