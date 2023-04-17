<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
    const email=data.session!.user.email;
</script>
<h1>Welcome</h1>
     <p>{email}</p>