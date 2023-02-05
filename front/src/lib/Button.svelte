<script>
    export let size = 'medium';
</script>

<button {...$$restProps} class:small={size === 'small'} class:medium={size == 'medium'}>
    <slot />
</button>

<style>
    button {
        padding: 0.4em 0.8em;
        border: none;
        background-color: var(--primary-color);
        color: var(--primary-background);
        font-size: 1em;
        cursor: pointer;
    }
    .small {
        padding: 0.25em 0.5em;
    }
    .medium {
        padding: 1em 1.5em;
    }
</style>
