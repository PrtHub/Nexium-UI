import Sidebar from "@/components/sidebar";
import Wrapper from "@/components/wrapper";

const DocsLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="h-full bg-[#09090b]">
            <Wrapper>
                <section className="hidden md:flex h-full w-60 z-30 flex-col fixed inset-y-0 border-r border-gray-300/10 pt-28">
                    <Sidebar />
                </section>
                <div className="h-full md:pl-60">{children}</div>
            </Wrapper>
        </main>
    );
};

export default DocsLayout; 