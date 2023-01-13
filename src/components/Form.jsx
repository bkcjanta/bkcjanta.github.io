import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { FormControl, FormLabel, Input, Stack, Textarea } from '@chakra-ui/react';
export const Form = () => {
    const [state, handleSubmit] = useForm("xnqyqeaq");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <Stack direction={"column"} spacing={10}>
            <form onSubmit={handleSubmit} id='form'>
                <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder='Name'
                    required
                />
                <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                />
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder='Email'
                    required
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
                <textarea
                    id="message"
                    name="message"
                    placeholder='Message'
                    required
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                <button type="submit" disabled={state.submitting}>
                    Submit
                </button>
            </form>
        </Stack>
    );
}