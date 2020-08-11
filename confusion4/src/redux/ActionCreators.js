import * as ActionTypes from './ActionTypes';
//importe tudo de action types como ActionTypes
//ActionTypes definem o tipo da ação (uma string)
//ActionCreators define um objeto js chamado ação
//Reducers usam a ação para retornar um novo estado atualizado
//Store ??

export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});