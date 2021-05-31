import './ExpenseItem.css'
function ExpenseItem() {
  return(

    <div className="expense-item">
      <div>26/05/2021</div>
      <div className="expense-item__description">
        <h2>Supermercado</h2>
        <div className="expense-item__price">89.67</div>
      </div>
    </div>
  )
}

export default ExpenseItem