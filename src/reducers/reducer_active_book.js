//state arg is not application state, only the state
//this reducer is responsible for 
//In otherwords same state keep flowing again & again
//in the reducer each time an action occured
export default function(state=null,action){
	//all reducers get two arg i.e current state and action
	switch(action.type){
		case 'BOOK_SELECTED':
			return action.payload;
	}
	return state;
}