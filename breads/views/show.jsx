const React = require("react");
const Default = require("./layout/default");

function Show({ bread }) {
  console.log(bread.name);
  return (
    <Default>
      <h3>{bread.name}</h3>
      <p>
        and it
        {bread.hasGluten ? <span> does </span> : <span> does NOT</span>}
        have gluten.
      </p>
      <img src={bread.image} alt={bread.name} />
      <p> Baked by {bread.getBakedBy()}</p>
      <li>
        <a href="/breads">Go home</a>
      </li>
      
<div className='editButton'>
      <a href={`/breads/${bread.id}/edit`}>
        <button>Edit</button>
      </a>
</div>
      <form action={`/breads/${bread.id}?_method=DELETE`} method="POST">
        <input type="submit" value="DELETE" />
      </form>
    </Default>
  );
}
module.exports = Show;
