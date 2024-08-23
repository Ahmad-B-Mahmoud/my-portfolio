"use client";
import * as React from "react";

import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  fullName: z
    .string()
    .min(2, {
      message: "Your Name must be at least 2 characters.",
    })
    .max(30, {
      message: "Your Name must not be higher than 30 characters.",
    })
    .regex(/^[a-zA-Zأ-ي\s-]+$/, {
      message: "Full name can only contain letters, spaces, and hyphens",
    }),
  email: z
    .string()
    .email({ message: "Invalid email address." })
    .min(1, { message: "Email is required." }),
  message: z
    .string()
    .min(10, {
      message: "Your Message must be at least 10 characters.",
    })
    .max(500, {
      message: "Your Message must not be higher than 500 characters.",
    })
    .regex(/^[a-zA-Zأ-ي0-9\s-]+$/, {
      message: "Message can only contain letters, spaces, numbers, and hyphens",
    }),
});

export function Contact() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="secondary">
            <svg
              className="w-4 h-4 me-2 text-secondary-foreground"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M4 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1v2a1 1 0 0 0 1.707.707L9.414 13H15a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4Z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M8.023 17.215c.033-.03.066-.062.098-.094L10.243 15H15a3 3 0 0 0 3-3V8h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1v2a1 1 0 0 1-1.707.707L14.586 18H9a1 1 0 0 1-.977-.785Z"
                clipRule="evenodd"
              />
            </svg>{" "}
            Contact Me
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Contact Me</DialogTitle>
            <DialogDescription>
              Get in-touch with me!, I am happy to hear from you.
            </DialogDescription>
          </DialogHeader>
          <ProfileForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Contact Me</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Contact Me</DrawerTitle>
          <DrawerDescription>
            Get in-touch with me!, I am happy to hear from you.
          </DrawerDescription>
        </DrawerHeader>
        <ProfileForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function ProfileForm({ className }: React.ComponentProps<"form">) {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
  });
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        apikey: "a28aa682-5981-47bb-a26f-57fbf6b956a0",
        name: values.fullName,
        email: values.email,
        message: values.message,
      }),
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
    } else {
      console.log("Something went wrong!");
      console.log(typeof process.env.Web3form_Key);
    }
  }
  return (
    <Form {...form}>
      <form
        className={cn("grid items-start gap-4", className)}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="grid gap-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="The Email address that i can respond to you at."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid gap-2">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Name</FormLabel>
                <FormControl>
                  <Input placeholder="What should i call you." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid gap-2">
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit">
          Send Mail{" "}
          <svg
            viewBox="0 -0.5 17 17"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            className="ml-2 h-4 w-4 si-glyph si-glyph-paper-plane"
          >
            <title>924</title>

            <defs></defs>
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <path
                d="M17,1.042 L11.436,14.954 L7.958,11.477 L8.653,13.563 L7.03,14.958 L7.03,11.563 L14.984,3.375 L6.047,9.969 L1,8.694 L17,1.042 Z"
                fill="#fff1f2"
                className="si-glyph-fill"
              ></path>
            </g>
          </svg>
        </Button>
      </form>
    </Form>
  );
}
