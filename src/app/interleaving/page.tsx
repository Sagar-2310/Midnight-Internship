// app/interleaving/page.tsx

// Make sure the filename in the path matches where the component is actually saved
import { ClientComponentOne } from "@/components/client-component-one";
import { ServerComponentOne } from "@/components/server-component-one";

export default function InterLeavingPage() {
    return (
        <>
            <h1>Interleaving page</h1>
            <ClientComponentOne />
            <ServerComponentOne />
        </>
    );
}