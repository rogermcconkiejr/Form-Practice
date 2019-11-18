import React, {useState} from 'react';

const FormComp = () => {
    const [obj, setObj] = useState({iceCream:"",basketballTeam:"",bballPlayer:"",city:""})
    const changeHandler = event =>{
        setObj({ ...obj, [event.target.name]:event.target.value})
    }
    const handleSubmit = event =>{
        event.preventDefault()
        console.log(obj);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Favorite Ice Cream:
                    <input
                    type="text"
                    name="iceCream"
                    onChange={changeHandler}
                    />
                </label>
                <label>
                    Favorite Baseball Player:
                    <input 
                    type="text"
                    name="bballPlayer"
                    onChange={changeHandler}
                    />
                </label>
                <label>
                    Favorite Basketball Team:
                    <input 
                    type="text"
                    name="basketballTeam"
                    onChange={changeHandler}
                    />
                </label>
                <label>
                    Favorite City:
                    <input 
                    type="text"
                    name="city"
                    onChange={changeHandler}
                    />
                </label>
                <button>Submit!</button>
            </form>
        </div>
    )
}

export default FormComp;
