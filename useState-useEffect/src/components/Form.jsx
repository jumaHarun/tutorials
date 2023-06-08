import { useState } from 'react';

const Form = () => {
    const [formState, setFormState] = useState({
        userName: undefined,
        email: '',
        bio: '',
        age: 0,
        isMarried: false,
        address: {
            street: '',
            // etc
        },
        plugins: [],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'isMarried') {
            setFormState((prevState) => ({
                ...prevState,
                isMarried: !prevState.isMarried,
            }));
        } else {
            setFormState((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        }
    };

    return (
        <>
            <ul role="list">
                <li>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="userName"
                            value={formState.userName}
                            onChange={handleChange}
                        />
                    </label>
                </li>

                <li>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={formState.email}
                            onChange={handleChange}
                        />
                    </label>
                </li>
                <li>
                    <label>
                        {`${
                            formState.userName ?? 'User'
                        }, please enter your age:`}
                        <input
                            type="tel"
                            name="age"
                            onChange={handleChange}
                            value={formState.age}
                        />
                    </label>
                </li>
                <li>
                    <label htmlFor="bio">Bio:</label>
                    <textarea
                        name="bio"
                        id="bio"
                        cols="30"
                        rows="10"
                        value={formState.bio}
                        onChange={handleChange}
                    ></textarea>
                </li>
                <li>
                    <label>
                        <input
                            type="checkbox"
                            name="isMarried"
                            checked={formState.isMarried}
                            onChange={handleChange}
                        />
                        Are you married?
                    </label>
                </li>

                {/* Dropdown, other inputs */}
            </ul>
        </>
    );
};
export default Form;
