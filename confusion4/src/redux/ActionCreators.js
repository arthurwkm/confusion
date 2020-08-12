import * as ActionTypes from './ActionTypes';
//importe tudo de action types como ActionTypes
//ActionTypes definem o tipo da ação (uma string)
//ActionCreators define um objeto js chamado ação
//Reducers usam a ação para retornar um novo estado atualizado
//Store ??
import { DISHES } from '../shared/dishes';


export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});
//this is a thunk vvvvvvvvvv
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    setTimeout(() => {
        dispatch(addDishes(DISHES));
    }, 2000);
    //setTimeout =  apos delay de x ms executa função
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});