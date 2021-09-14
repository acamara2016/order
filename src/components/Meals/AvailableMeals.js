import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Nike JS',
    description: 'Finest Jordans',
    price: 87.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
  },
  {
    id: 'm2',
    name: 'Nike BLUE Engery',
    description: 'Refurbished Nikes!',
    price: 45.85,
    image: 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80'
  },
  {
    id: 'm3',
    name: 'Red Adidas',
    description: 'Red Jumpy Adidas',
    price: 123.99,
    image: 'https://images.unsplash.com/photo-1505874462322-dfcf87f819a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1534&q=80'
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      image={meal.image}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
  
        {mealsList}

    </section>
  );
};

export default AvailableMeals;
