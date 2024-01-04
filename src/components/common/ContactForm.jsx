const ContactForm = () => {

    return(
        <div className="bg-gray-100 p-10 my-20">
            <h2 className="text-3xl font-medium mb-6">Tell us about you.</h2>
            <form className="space-y-4">
                <div>
                    <input
                        className="w-full p-2 border-b border-ninjapromo_gray bg-transparent"
                        type="text"
                        placeholder="First Name*"
                        required
                    />
                </div>
                <div>
                    <input
                        className="w-full p-2 border-b border-ninjapromo_gray bg-transparent"
                        type="text"
                        placeholder="Last Name (Optional)"
                    />
                </div>
                <div>
                    <input
                        className="w-full p-2 border-b border-ninjapromo_gray bg-transparent"
                        type="email"
                        placeholder="Email*"
                        required
                    />
                </div>
                <div>
                    <input
                        className="w-full p-2 border-b border-ninjapromo_gray bg-transparent"
                        type="url"
                        placeholder="Website URL (Optional)"
                    />
                </div>
                <div>
                    <select className="w-full p-2 border-b-2 border-gray-300 bg-transparent" required>
                        <option disabled selected>What is your Budget?*</option>
                    </select>
                </div>
                <div>
                    <textarea
                        className="w-full p-2 border-b-2 border-gray-300 bg-transparent"
                        placeholder="Your Message (Optional)"
                        rows="4">
                    </textarea>
                </div>
                <div className="pt-4">
                    <button type="submit" className="w-full bg-purple-700 text-white p-3">Submit</button>
                </div>
                <p className="text-sm">By clicking next, you agree to receive communications from NinjaPromo in accordance with our Privacy Policy.</p>
            </form>
        </div>
    )

}

export default ContactForm
