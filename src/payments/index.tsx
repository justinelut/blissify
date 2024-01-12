import { z } from "zod";
import { useForm } from "react-hook-form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const FormSchema = z.object({
  type: z.enum(["free-tier", "standard-tier", "pro-tier"], {
    required_error: "You need to select a notification type.",
  }),
});

export default function Subscription() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const {reset, clearErrors, watch} = form



  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }
  

  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-row gap-6">
        <ArrowLeft />
        <h3>Blissify Rent</h3>
      </div>
      <div className="grid grid-col grid-cols-1 md:grid-cols-2 mt-10 px-20 gap-8">
        <div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-6"
          >
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel className="text-2xl font-semibold">Select pricing model...</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1 gap-4"
                    >
                      <FormItem
                        className={`flex flex-row space-x-3 space-y-0 border-2 border-green-500 rounded-md p-6 w-full flex-1 justify-between`}
                      >
                        <FormControl>
                          <RadioGroupItem
                            className="border-green-500 text-green-500 w-5 h-5"
                            value="free-tier"
                          />
                        </FormControl>
                        <div className="flex flex-col gap-2">
                          <FormLabel className="font-bold text-xl">
                            Free tier
                          </FormLabel>
                          <FormLabel>
                            For the new subscriber on the platform who just
                            wants basic listings
                          </FormLabel>
                        </div>
                        <FormLabel className="font-bold text-xs">
                          Free tier
                        </FormLabel>
                      </FormItem>
                      <FormItem
                        className={`flex flex-row space-x-3 space-y-0 border-2 border-green-500 rounded-md p-6 w-full flex-1 justify-between`}
                      >
                        <FormControl>
                          <RadioGroupItem
                            className="border-green-500 text-green-500 w-5 h-5"
                            value="standard-tier"
                          />
                        </FormControl>
                        <div className="flex flex-col gap-2">
                          <FormLabel className="font-bold text-xl">
                            Standard tier
                          </FormLabel>
                          <FormLabel>
                            For the new subscriber on the platform who just
                            wants basic listings
                          </FormLabel>
                        </div>
                        <FormLabel className="font-bold text-xs">
                          Ksh 500.
                        </FormLabel>
                      </FormItem>
                      <FormItem
                        className={`flex flex-row space-x-3 space-y-0 border-2 border-green-500 rounded-md p-6 w-full flex-1 justify-between`}
                      >
                        
                        <FormControl>
                          <RadioGroupItem
                            className="border-2 border-green-500 text-green-500 w-5 h-5"
                            value="pro-tier"
                          />
                        </FormControl>
                        <div className="flex flex-col gap-2">
                          <FormLabel className="font-bold text-xl">
                            Pro tier
                          </FormLabel>
                          <FormLabel>
                            For the new subscriber on the platform who just
                            wants basic listings
                            <div className="flex flex-row mt-4 items-center"><CheckCircle className="mr-4"/>55 Listings</div>
                          </FormLabel>

                        </div>
                        <FormLabel className="font-bold text-xs">
                          Ksh 1500.
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="bg-green-500 w-full">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
