import { MiniBanner } from "./mini-banner"
import { MostRead } from "./most_read"

export const Banner = () => {
    return (
        <section className="pt-4 pb-4">
            <div className="container">
                <div className="flex gap-6">
                    <div className="grow rounded-2xl bg-primary_soft">
                        <MostRead />
                    </div>
                    <div className="w-[261px] h-[351px] rounded-2xl bg-[#3748A6]">
                        <MiniBanner />
                    </div>
                </div>
            </div>
        </section>
    )
}