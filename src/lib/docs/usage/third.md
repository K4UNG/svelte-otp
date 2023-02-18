You can also restrict it to only accept numbers by adding the `numberOnly` attribute.

Separators can be set through the `separator` prop. Placeholders can be added through `placeholder` prop.

<br/>

```js
<script>
    import SvelteOtp from ‘@kaung/svelte-otp’;

    let value = '12';
</script>

<SvelteOtp
    numberOnly
    bind:value
    separator="-"
    placeholder="********"
/>
```
