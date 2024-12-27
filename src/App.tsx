import { useEffect, useState } from "react";
import "./App.css";
import { Button } from "./components/ui/button";
import { Label } from "./components/ui/label";
import { Input } from "./components/ui/input";
import { useToast } from "./hooks/use-toast";

function App() {
    const { toast } = useToast();

    useEffect(() => {
        document.title = "Demo Queue Up";
    }, []);

    const [email, setEmail] = useState("");

    const submitForm = () => {
        console.log("Email: ", email);

        toast({
            title: `email: ${email}`,
        });
    };

    return (
        <section className="pt-32 px-10 relative">
            <div className="max-w-md w-full bg-white/5 mx-auto rounded-lg light-shadow p-6 sm:p-10">
                <h3 className="text-normal md:text-xl  font-semibold leading-relaxed text-center">
                    Get Early Access
                </h3>
                <p className="text-sm/3 mt-2 text-white/70 mx-auto leading-relaxed text-center">
                    Early access members get exclusive updates and offers.
                    Don&apos;t miss out!
                </p>
                <div className="mt-10 ">
                    <div className="flex flex-col gap-1">
                        <Label className="text-xs text-white/70">Email *</Label>
                        <Input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </div>
                    <Button
                        onClick={() => {
                            submitForm();
                        }}
                        className="w-full mt-6 py-5 bg-[#C6FCA6]"
                    >
                        Join Waitlist
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default App;
