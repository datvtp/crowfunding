import React, { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import ImageUploader from "quill-image-uploader";
import DatePicker from "react-date-picker";
import { toast } from "react-toastify";

import { FormGroup } from "components/common";
import FormRow from "components/common/FormRow";
import { Label } from "components/label";
import { Input, Textarea } from "components/input";
import { Dropdown } from "components/dropdown";
import axios from "axios";
import { Button } from "components/button";
import useOnChange from "hooks/useOnChange";

Quill.register("modules/imageUploader", ImageUploader);

const categoriesData = ["architecture", "education"];

const CampaignAddNew = () => {
  const { handleSubmit, control, setValue, watch } = useForm();
  const getDropdownLabel = (name, defaultValue = "") => {
    const value = watch(name) || defaultValue;
    return value;
  };
  const [content, setContent] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleAddNewCampaign = (values) => {};

  const modules = useMemo(
    () => ({
      toolbar: [
        ["bold", "italic", "underline", "strike"],
        ["blockquote"],
        [{ header: 1 }, { header: 2 }],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["link", "image"],
      ],
      imageUploader: {
        upload: async (file) => {
          // const bodyFormData = new FormData();
          // bodyFormData.append("image", file);
          // const res = await axios({
          //   method: "post",
          //   url: "https://api.imgbb.com/1/upload?key=07fec499b5f9276351aaf7d19a88dbf8",
          //   data: bodyFormData,
          //   headers: {
          //     "Content-Type": "multipart/form-data",
          //   },
          // });
          // return res.data.data.url;
        },
      },
    }),
    []
  );

  const [countries, setCountries] = useState([]);
  const [filterCountry, setFilterCountry] = useOnChange(500);
  useEffect(() => {
    async function fetchCountries() {
      if (!filterCountry) return;
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/name/${filterCountry}`
        );
        setCountries(response.data);
      } catch (error) {
        toast.error(error.message);
      }
    }
    fetchCountries();
  }, [filterCountry]);

  const handleSelectDropdownOption = (name, value) => {
    setValue(name, value);
  };

  return (
    <div className="bg-white rounded-xl py-10 px-[66px] shadow-15%">
      <div className="text-center">
        <h1 className="py-4 font-bold px-14 bg-text4 bg-opacity-5 rounded-xl text-[25px] inline-block mb-10">
          Start a Campaign 🚀
        </h1>
      </div>

      <form autoComplete="off" onSubmit={handleSubmit(handleAddNewCampaign)}>
        <FormRow>
          <FormGroup>
            <Label>Campaign Title *</Label>
            <Input
              control={control}
              name="title"
              placeholder="Write a title"
            ></Input>
          </FormGroup>

          <FormGroup>
            <Label>Select a category *</Label>
            <Dropdown>
              <Dropdown.Select
                placeholder={getDropdownLabel("category", "Select category")}
              ></Dropdown.Select>

              <Dropdown.List>
                {categoriesData.map((category) => (
                  <Dropdown.Option
                    key={category}
                    onClick={() =>
                      handleSelectDropdownOption("category", category)
                    }
                  >
                    <span className="capitalize">{category}</span>
                  </Dropdown.Option>
                ))}
              </Dropdown.List>
            </Dropdown>
          </FormGroup>
        </FormRow>

        <FormGroup>
          <Label>Short description *</Label>
          <Textarea
            name="short-description"
            placeholder="Write a short description...."
            control={control}
          ></Textarea>
        </FormGroup>

        <FormGroup>
          <Label>Story *</Label>
          <ReactQuill
            placeholder="Write your story...... "
            modules={modules}
            theme="snow"
            value={content}
            onChange={setContent}
          />
        </FormGroup>

        <FormRow>
          <FormGroup>
            <Label>Goal *</Label>
            <Input
              control={control}
              name="goal"
              placeholder="$0.00 USD"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label>Raised amount *</Label>
            <Input
              control={control}
              name="amount"
              placeholder="$0.00 USD"
            ></Input>
          </FormGroup>
        </FormRow>

        <FormRow>
          <FormGroup>
            <Label>Amount Prefilled</Label>
            <Input
              control={control}
              name="prefilled"
              placeholder="Amount Prefilled"
            ></Input>
            <p className="text-sm text-left text-text3">
              It will help fill amount box by click, place each amount by comma,
              ex: 10,20,30,40
            </p>
          </FormGroup>
          <FormGroup>
            <Label>Video</Label>
            <Input control={control} name="video" placeholder="Video"></Input>
            <p className="text-sm text-left text-text3">
              Place Youtube or Vimeo Video URL
            </p>
          </FormGroup>
        </FormRow>

        <FormRow>
          <FormGroup>
            <Label>Campaign End Method</Label>
            <Dropdown>
              <Dropdown.Select placeholder="Select one"></Dropdown.Select>
              <Dropdown.List>
                <Dropdown.Option>Busy</Dropdown.Option>
                <Dropdown.Option>Test</Dropdown.Option>
              </Dropdown.List>
            </Dropdown>
          </FormGroup>
          <FormGroup>
            <Label>Country</Label>
            <Dropdown>
              <Dropdown.Select
                placeholder={getDropdownLabel("country", "Select country")}
              ></Dropdown.Select>
              <Dropdown.List>
                <Dropdown.Search
                  placeholder="Search country..."
                  onChange={setFilterCountry}
                ></Dropdown.Search>
                {countries.length > 0 &&
                  countries.map((country) => (
                    <Dropdown.Option
                      key={country?.name?.common}
                      onClick={() =>
                        handleSelectDropdownOption(
                          "country",
                          country?.name?.common
                        )
                      }
                    >
                      {country?.name?.common}
                    </Dropdown.Option>
                  ))}
              </Dropdown.List>
            </Dropdown>
          </FormGroup>
        </FormRow>

        <FormRow>
          <FormGroup>
            <Label>Start Date</Label>

            <DatePicker
              onChange={setStartDate}
              value={startDate}
              format="dd-MM-yyyy"
            />
          </FormGroup>
          <FormGroup>
            <Label>End Date</Label>
            <DatePicker
              onChange={setEndDate}
              value={endDate}
              format="dd-MM-yyyy"
            />
          </FormGroup>
        </FormRow>
        <div className="mt-10 text-center">
          <Button type="submit" className="px-10 mx-auto text-white bg-primary">
            Submit new campaign{" "}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CampaignAddNew;
