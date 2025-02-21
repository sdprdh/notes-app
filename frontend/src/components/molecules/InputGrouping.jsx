import {Input, Textarea} from "@chakra-ui/react";
import {Field} from "@/components/atoms/field.jsx";
import {PasswordInput} from "@/components/atoms/password-input.jsx";

const InputGrouping = (
    {
        type = null,
        label = null,
        name = null,
        placeholder = null,
        size = 'xs',
        defaultValue = '',
        onChange = () => {},
    }) => {

    const htmlReturn = () => {
        switch (type) {
            case 'password':
                return (
                    <Field label={label}>
                        <PasswordInput
                            name={name}
                            placeholder={placeholder}
                            size={size}
                            defaultValue={defaultValue}
                            onChange={onChange}
                        />
                    </Field>
                );
            case 'textarea':
                return (
                    <Field label={label}>
                        <Textarea
                            name={name}
                            placeholder={placeholder}
                            size={size}
                            h="6rem"
                            defaultValue={defaultValue}
                            onChange={onChange}
                        />
                    </Field>
                )
            default:
                return (
                    <Field label={label}>
                        <Input
                            type={type}
                            name={name}
                            placeholder={placeholder}
                            size={size}
                            autoComplete="on"
                            defaultValue={defaultValue}
                            onChange={onChange}
                        />
                    </Field>
                );
        }
    }

    return (
        htmlReturn()
    );
};

export default InputGrouping;